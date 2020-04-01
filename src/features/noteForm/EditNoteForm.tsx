import React from "react"
import { connect, ResolveThunks } from "react-redux"
import { updateNoteAsync } from "../../app/data"
import { NoteForm } from "./NoteForm"
import { RootState } from "../../app/store"

type Props = ReturnType<typeof mapStateToProps> &
  ResolveThunks<typeof mapDispatchToProps>

export const EditNoteForm = ({
  noteDetails,
  progress,
  updateNoteAsync,
}: Props) => {
  const handleSubmit = (title: string): string => {
    if (!noteDetails.id) return title
    updateNoteAsync(noteDetails.id, title)
    return title
  }

  return (
    <NoteForm
      disabled={!noteDetails || progress}
      onSubmit={handleSubmit}
      initialTitle={noteDetails.title || ""}
    />
  )
}

const mapStateToProps = (state: RootState) => ({
  noteDetails: state.noteDetails,
  progress: state.info.progress,
})

const mapDispatchToProps = {
  updateNoteAsync,
}

const ConnectedNewNoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNoteForm)
export default ConnectedNewNoteForm
