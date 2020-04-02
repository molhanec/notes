import React from "react"
import { connect, ResolveThunks } from "react-redux"
import { addNoteAsync } from "../../app/data"
import { NoteForm } from "./NoteForm"
import { RootState } from "../../app/store"
import { useTranslate } from "./../../app/translations"

type Props = ReturnType<typeof mapStateToProps> &
  ResolveThunks<typeof mapDispatchToProps>

export const NewNoteForm = ({ addNoteAsync, progress }: Props) => {
  const t = useTranslate()

  const handleSubmit = (title: string) => addNoteAsync(title)

  return (
    <NoteForm
      formHeader={t("newFormHeader")}
      onSubmit={handleSubmit}
      disabled={progress}
    />
  )
}

const mapStateToProps = (state: RootState) => ({
  progress: state.info.progress,
})

const mapDispatchToProps = {
  addNoteAsync,
}

const ConnectedNewNoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNoteForm)
export default ConnectedNewNoteForm
