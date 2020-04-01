import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { AppThunk } from "../../app/store"
import { fetchJson } from "../../app/data"
import { setProgress, setError, setSuccess } from "../info/infoSlice"

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
  },
})

export const loadNotesAsync = (): AppThunk => async dispatch => {
  dispatch(setProgress())
  try {
    const data = await fetchJson<Notes>("")
    dispatch(setSuccess(""))
    dispatch(setNotes(data))
  } catch {
    dispatch(setError("Cannot load notes"))
  }
}

export const { setNotes } = notesSlice.actions
export default notesSlice.reducer
