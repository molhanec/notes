import React from "react"
import { connect } from "react-redux"

import { RootState } from "../../app/store"
import { Card, Progress } from "reactstrap"
import { useTranslate } from "./../../app/translations"

type Props = ReturnType<typeof mapStateToProps>

const Info: React.FC<Props> = ({ progress, error, success }: Props) => {
  const t = useTranslate()

  if (!progress && !error && !success) return null
  if (progress) return <Progress animated value={100} className="mb-4" />
  return (
    <Card body inverse color={error ? "danger" : "success"} className="mb-4">
      {error && t(error)}
      {success && t(success)}
    </Card>
  )
}

const mapStateToProps = (state: RootState) => ({
  progress: state.info.progress,
  error: state.info.error,
  success: state.info.success,
})

const ConnectedInfo = connect(mapStateToProps)(Info)
export default ConnectedInfo
