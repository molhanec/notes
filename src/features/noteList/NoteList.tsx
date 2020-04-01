import React, { useEffect } from 'react'
import { connect, ResolveThunks } from 'react-redux'

import { RootState } from '../../app/store'
import { loadNotesAsync } from './notesSlice'
import { Link } from 'react-router-dom'
import { setNoteDetails } from '../noteDetails/noteDetailsSlice'

type Props = ReturnType<typeof mapStateToProps> &
  ResolveThunks<typeof mapDispatchToProps>

const NoteList: React.FC<Props> = ({ notes, loadNotesAsync,setNoteDetails }: Props) => {
  useEffect(() => {
    setNoteDetails(undefined)
    loadNotesAsync()
  }, [loadNotesAsync, setNoteDetails])

  return (
    <>
      {notes.map(note => (
        <div key={note.id}>
          <Link to={`/note/${note.id}`}>{note.title}</Link>
        </div>
      ))}
    </>
  )
}

const mapStateToProps = (state: RootState) => ({ notes: state.notes.notes })

const mapDispatchToProps = {
  loadNotesAsync,
  setNoteDetails,
}

const ConnectedNoteList = connect(mapStateToProps, mapDispatchToProps)(NoteList)
export default ConnectedNoteList
