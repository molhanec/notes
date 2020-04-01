import React, { FormEvent, useState, ChangeEvent } from "react"

type Props = {
  initialTitle?: string
  disabled?: boolean
  onSubmit: (title: string) => string
}

export const NoteForm = ({
  initialTitle = "",
  disabled = false,
  onSubmit,
}: Props) => {
  const [title, setTitle] = useState<string>(initialTitle)

  const titleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!title.trim()) return
    setTitle(onSubmit(title.trim()))
  }

  return (
    <form onSubmit={submit}>
      <label htmlFor="title">Title </label>
      <input
        id="title"
        value={title}
        onChange={titleChange}
        disabled={disabled}
      />
      <button disabled={disabled || !title.trim()}>Save</button>
    </form>
  )
}
