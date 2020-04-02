import React from "react"
import { connect, ResolveThunks } from "react-redux"
import { updateNoteAsync } from "../../app/data"
import { NoteForm } from "./NoteForm"
import { RootState } from "../../app/store"
import { useTranslate } from "./../../app/translations"

type Props = ReturnType<typeof mapStateToProps> &
  ResolveThunks<typeof mapDispatchToProps> & {
    onDelete: () => void
  }

export const EditNoteForm = ({
  noteDetails,
  progress,
  updateNoteAsync,
  onDelete,
}: Props) => {
  const t = useTranslate()

  const handleSubmit = (title: string) => {
    if (!noteDetails.id) return
    updateNoteAsync(noteDetails.id, title)
  }

  return (
    <NoteForm
      disabled={!noteDetails || progress}
      onSubmit={handleSubmit}
      onDelete={onDelete}
      formHeader={t("editFormHeader")}
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
