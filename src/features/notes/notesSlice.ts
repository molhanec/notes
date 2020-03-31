import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

export const slice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (newState: NotesState, action: PayloadAction<Notes>) => {
      newState.notes = action.payload
    },
  },
})

export const { setNotes } = slice.actions
export default slice.reducer
