import React, { useEffect, useState } from 'react'

import { fetchJson } from '../../utils/data'

type Notes = Array<{
  id: number
  title: string
}>

export const Notes = () => {
  const [error, setError] = useState<boolean>(false)
  const [notes, setNotes] = useState<Notes>([])

  useEffect(() => {
    fetchJson<Notes>(
      "https://private-anon-3ab0da907c-note10.apiary-mock.com/notes"
    )
      .then(data => setNotes(data))
      .catch(error => setError(true))
  }, [])

  return (
    <>
      {error && <div>Cannot get the data!</div>}
      {notes.map(note => (
        <div key={note.id}>{note.title}</div>
      ))}
    </>
  )
}
