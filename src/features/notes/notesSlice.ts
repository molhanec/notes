import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppThunk } from '../../app/store'
import { fetchJson } from '../../utils/data'

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

export const loadNotesAsync = (): AppThunk => async dispatch => {
  const data = await fetchJson<Notes>(
    "https://private-anon-3ab0da907c-note10.apiary-mock.com/notes"
  )
  dispatch(setNotes(data))
}

export const { setNotes } = slice.actions
export default slice.reducer
