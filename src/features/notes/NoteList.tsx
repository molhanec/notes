import React, { useEffect } from 'react'
import { connect, ResolveThunks } from 'react-redux'

import { RootState } from '../../app/store'
import { loadNotesAsync } from './notesSlice'

type Props = ReturnType<typeof mapStateToProps> &
  ResolveThunks<typeof mapDispatchToProps>

const NoteList: React.FC<Props> = ({ notes, loadNotesAsync }: Props) => {
  useEffect(() => {
    loadNotesAsync()
  }, [loadNotesAsync])

  return (
    <>
      {notes.map(note => (
        <div key={note.id}>
          <a href={`/note/${note.id}`}>{note.title}</a>
        </div>
      ))}
    </>
  )
}

const mapStateToProps = (state: RootState) => ({ notes: state.notes.notes })

const mapDispatchToProps = {
  loadNotesAsync,
}

const ConnectedNoteList = connect(mapStateToProps, mapDispatchToProps)(NoteList)
export default ConnectedNoteList
