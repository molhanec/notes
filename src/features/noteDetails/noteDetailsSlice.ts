import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppThunk } from '../../app/store'
import { fetchJson } from '../../utils/data'

/**
 * In the mock the "complete" Note with details is actually completely
 * same as the "overview" Note for the Note list.
 * However I assume that the "complete" Note would normally have much
 * more details so I treat them as separate types and do the backend
 * request instead of just reusing the data from the state.
 */
export interface NoteDetails {
  id: number
  title: string
}

interface NoteDetailsState {
  noteDetails?: NoteDetails
}

const initialState: NoteDetailsState = {
  noteDetails: undefined
}

export const slice = createSlice({
  name: "noteDetails",
  initialState,
  reducers: {
    setNoteDetails: (newState: NoteDetailsState, action: PayloadAction<NoteDetails | undefined>) => {
      newState.noteDetails = action.payload
    },
  },
})

export const loadNoteDetailsAsync = (noteId: string): AppThunk => async dispatch => {
  const data = await fetchJson<NoteDetails>(`notes/${noteId}`)
  dispatch(setNoteDetails(data))
}

export const { setNoteDetails } = slice.actions
export default slice.reducer
