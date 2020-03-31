import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Note {
  id: number
  title: string
}

type Notes = Note[]

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
    set: (newState: NotesState, action: PayloadAction<NotesState>) => {
      newState.notes = action.payload.notes
    },
  },
})

export default slice.reducer
