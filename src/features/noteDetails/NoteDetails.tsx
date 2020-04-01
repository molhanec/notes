import React, { useEffect } from "react"
import { connect, ResolveThunks } from "react-redux"

import { RootState } from "../../app/store"
import { loadNoteDetailsAsync, setNoteDetails } from "./noteDetailsSlice"
import { RouteComponentProps } from "react-router-dom"
import EditNoteForm from "../noteForm/EditNoteForm"
import { deleteNoteAsync } from "../../app/data"

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
  deleteNoteAsync,
  progress,
}: Props) => {
  useEffect(() => {
    setNoteDetails(undefined)
    loadNoteDetailsAsync(match.params.noteId)
  }, [loadNoteDetailsAsync, setNoteDetails, match.params.noteId])

  if (!noteDetails.id) return null

  const handleDelete = () => {
    if (!noteDetails.id) return
    deleteNoteAsync(noteDetails.id)
  }

  return (
    <>
      <EditNoteForm />
      <button onClick={handleDelete} disabled={progress}>
        Delete
      </button>
    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  noteDetails: state.noteDetails,
  progress: state.info.progress,
})

const mapDispatchToProps = {
  loadNoteDetailsAsync,
  setNoteDetails,
  deleteNoteAsync,
}

const ConnectedNoteDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetails)
export default ConnectedNoteDetails
