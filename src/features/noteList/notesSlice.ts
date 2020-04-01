import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { AppThunk } from "../../app/store"
import { fetchJson } from "../../app/data"

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

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (newState: NotesState, action: PayloadAction<Notes>) => {
      newState.notes = action.payload
    },
  },
})

export const loadNotesAsync = (): AppThunk => async dispatch => {
  const data = await fetchJson<Notes>("notes")
  dispatch(setNotes(data))
}

export const { setNotes } = notesSlice.actions
export default notesSlice.reducer
