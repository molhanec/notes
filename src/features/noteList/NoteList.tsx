import React, { useEffect } from "react"
import { connect, ResolveThunks } from "react-redux"

import { RootState } from "../../app/store"
import { loadNotesAsync } from "./notesSlice"
import { setNoteDetails } from "../noteDetails/noteDetailsSlice"
import { Card } from "reactstrap"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledLink = styled(Link)`
  color: white;
  &:hover {
    color: white;
    text-decoration: none;
  }
`

const StyledCard = styled(Card)`
  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.75);
  }
`

type Props = ReturnType<typeof mapStateToProps> &
  ResolveThunks<typeof mapDispatchToProps>

const NoteList: React.FC<Props> = ({
  notes,
  loadNotesAsync,
  setNoteDetails,
}: Props) => {
  useEffect(() => {
    setNoteDetails(undefined)
    loadNotesAsync()
  }, [loadNotesAsync, setNoteDetails])

  return (
    <>
      {notes.map(note => (
        <StyledCard key={note.id} body color="info" className="mb-3">
          <StyledLink to={`/note/${note.id}`} className="stretched-link">
            {note.title}
          </StyledLink>
        </StyledCard>
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
