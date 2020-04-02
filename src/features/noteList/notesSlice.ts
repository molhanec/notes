import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { AppThunk } from "../../app/store"
import { fetchJson } from "../../app/data"
import { setProgress, setError } from "../info/infoSlice"

export interface Note {
  id: number
  title: string
}

export type Notes = Note[]

interface NotesState {
  notes: Notes
}

const initialState: NotesState = {
  notes: [],
}

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (newState: NotesState, action: PayloadAction<Notes>) => {
      newState.notes = action.payload
    },
    setNote: (newState: NotesState, action: PayloadAction<Note>) => {
      const existingNode = newState.notes.find(
        note => note.id === action.payload.id
      )
      if (existingNode) existingNode.title = action.payload.title
      else newState.notes.push(action.payload)
    },
  },
})

export const loadNotesAsync = (): AppThunk => async dispatch => {
  dispatch(setProgress())
  try {
    const data = await fetchJson<Notes>("")
    dispatch(setProgress(false))
    dispatch(setNotes(data))
  } catch {
    dispatch(setError("notesLoadFailure"))
  }
}

export const { setNote, setNotes } = notesSlice.actions
export default notesSlice.reducer
