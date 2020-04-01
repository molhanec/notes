import React, { FormEvent, useState, ChangeEvent } from "react"
import { connect, ResolveThunks } from "react-redux"
import { addNoteAsync } from "../../app/data"

type Props = ResolveThunks<typeof mapDispatchToProps>

export const NoteForm = ({ addNoteAsync }: Props) => {
  const [title, setTitle] = useState<string>("")

  const titleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (title.trim()) addNoteAsync(title.trim())
    setTitle("")
  }

  return (
    <form onSubmit={submit}>
      <label htmlFor="title">Title </label>
      <input id="title" value={title} onChange={titleChange} />
      <button disabled={!title.trim()}>Save</button>
    </form>
  )
}

const mapDispatchToProps = {
  addNoteAsync,
}

const ConnectedNoteForm = connect(null, mapDispatchToProps)(NoteForm)
export default ConnectedNoteForm
