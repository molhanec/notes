import React from "react"
import { connect } from "react-redux"

import { RootState } from "../../app/store"

type Props = ReturnType<typeof mapStateToProps>

const Info: React.FC<Props> = ({ progress, error, success }: Props) => {
  return (
    <div>
      {progress && "PROGRESS!"}
      {error && `ERROR: ${error}`}
      {success && `SUCCESS: ${success}`}
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  progress: state.info.info.progress,
  error: state.info.info.error,
  success: state.info.info.success,
})

const ConnectedInfo = connect(mapStateToProps)(Info)
export default ConnectedInfo
