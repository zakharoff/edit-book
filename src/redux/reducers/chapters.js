import Book from "../../data/book.json"

const initialState = Book.Chapters

export const chapters = function (state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_CHAPTER":
      return state.map(
        (chapter) => (
          chapter.Id === action.id
            ? { ...chapter, Completed: !chapter.Completed }
            : chapter
        )
      )

    case "TOGGLE_SUBTITLE":
      const idx = state.findIndex(chapter => chapter.Id === action.parent)

      return [
        ...state.slice(0, idx),
        {
          ...state[idx],
          Subtitles: state[idx].Subtitles.map(subTitle => {
            if (subTitle.Id === action.id)
              return { ...subTitle, Completed: !subTitle.Completed }
            else
              return subTitle
          })
        },
        ...state.slice(idx + 1, state.length)
      ]

    default:
      return state
  }
}
