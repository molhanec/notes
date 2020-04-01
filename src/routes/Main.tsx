import React from "react"
import NoteList from "../features/noteList/NoteList"
import NewNoteForm from "../features/noteForm/NoteForm"

export const MainRoute = () => (
  <>
    <NewNoteForm />
    <NoteList />
  </>
)
