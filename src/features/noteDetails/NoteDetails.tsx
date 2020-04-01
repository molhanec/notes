import React, { useEffect } from "react"
import { connect, ResolveThunks } from "react-redux"

import { RootState } from "../../app/store"
import { loadNoteDetailsAsync, setNoteDetails } from "./noteDetailsSlice"
import { RouteComponentProps } from "react-router-dom"

type RouterParams = RouteComponentProps<{
  noteId: string
}>

type Props = ReturnType<typeof mapStateToProps> &
  ResolveThunks<typeof mapDispatchToProps> &
  RouterParams

const NoteDetails: React.FC<Props> = ({
  match,
  noteDetails,
  loadNoteDetailsAsync,
  setNoteDetails,
}: Props) => {
  useEffect(() => {
    setNoteDetails(undefined)
    loadNoteDetailsAsync(match.params.noteId)
  }, [loadNoteDetailsAsync, setNoteDetails, match.params.noteId])

  if (!noteDetails) return null

  return (
    <div>
      <p>{noteDetails.id}</p>
      <p>{noteDetails.title}</p>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  noteDetails: state.noteDetails.noteDetails,
})

const mapDispatchToProps = {
  loadNoteDetailsAsync,
  setNoteDetails,
}

const ConnectedNoteDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetails)
export default ConnectedNoteDetails
