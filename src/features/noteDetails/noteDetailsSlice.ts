import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { AppThunk } from "../../app/store"
import { fetchJson } from "../../app/data"
import { setProgress, setSuccess, setError } from "../info/infoSlice"

/**
 * In the mock the "complete" Note with details is actually completely
 * same as the "overview" Note for the Note list.
 * However I assume that the "complete" Note would normally have much
 * more details so I treat them as separate types and do the backend
 * request instead of just reusing the data from the state.
 */
export interface NoteDetails {
  id?: number
  title?: string
}

export const initialState: NoteDetails = {
  id: undefined,
  title: undefined,
}

const slice = createSlice({
  name: "noteDetails",
  initialState,
  reducers: {
    setNoteDetails: (
      newState: NoteDetails,
      action: PayloadAction<NoteDetails | undefined>
    ) => action.payload || initialState,
  },
})

export const loadNoteDetailsAsync = (
  noteId: string
): AppThunk => async dispatch => {
  dispatch(setProgress())
  try {
    const data = await fetchJson<NoteDetails>(`/${noteId}`)
    dispatch(setSuccess(undefined))
    dispatch(setNoteDetails(data))
  } catch {
    dispatch(setError("noteLoadFailure"))
  }
}

export const { setNoteDetails } = slice.actions
export default slice.reducer
