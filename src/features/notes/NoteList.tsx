import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { RootState } from '../../app/store'
import { fetchJson } from '../../utils/data'
import { Notes, setNotes } from './notesSlice'

interface Props {
  notes: Notes
  setNotes: (notes: Notes) => void
}

const NoteList = ({ notes, setNotes }: Props) => {
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    fetchJson<Notes>(
      "https://private-anon-3ab0da907c-note10.apiary-mock.com/notes"
    )
      .then(data => setNotes(data))
      .catch(error => setError(true))
  }, [setNotes])

  return (
    <>
      {error && <div>Cannot get the data!</div>}
      {notes.map(note => (
        <div key={note.id}>{note.title}</div>
      ))}
    </>
  )
}

const mapStateToProps = (state: RootState) => ({ notes: state.notes.notes })

const mapDispatchToProps = {
  setNotes,
}

const ConnectedNoteList = connect(mapStateToProps, mapDispatchToProps)(NoteList)
export default ConnectedNoteList
