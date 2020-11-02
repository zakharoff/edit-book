import { connect } from "react-redux"

import Tale from "./Tale"

const mapStateToProps = ({ bookInfo, chapters }) => ({
  title: bookInfo.title,
  annotation: bookInfo.annotation,
  chapters: chapters.entries,
})

export default connect(mapStateToProps)(Tale)
