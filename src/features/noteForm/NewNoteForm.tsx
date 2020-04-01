import React from "react"
import { connect, ResolveThunks } from "react-redux"
import { addNoteAsync } from "../../app/data"
import { NoteForm } from "./NoteForm"

type Props = ResolveThunks<typeof mapDispatchToProps>

export const NewNoteForm = ({ addNoteAsync }: Props) => {
  const handleSubmit = (title: string) => {
    addNoteAsync(title)
    return ""
  }

  return <NoteForm onSubmit={handleSubmit} />
}

const mapDispatchToProps = {
  addNoteAsync,
}

const ConnectedNewNoteForm = connect(null, mapDispatchToProps)(NewNoteForm)
export default ConnectedNewNoteForm
