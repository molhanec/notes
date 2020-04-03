import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PhraseKeys } from "../../app/translations"

export interface Info {
  progress: boolean
  error?: PhraseKeys
  success?: PhraseKeys
}

export const initialState: Info = {
  progress: false,
  error: undefined,
  success: undefined,
}

const slice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setProgress: (
      newState: Info,
      action: PayloadAction<boolean | undefined>
    ) => {
      newState.progress = action.payload ?? true
    },
    setError: (
      newState: Info,
      action: PayloadAction<PhraseKeys | undefined>
    ) => {
      return {
        progress: false,
        error: action.payload,
        success: undefined,
      }
    },
    setSuccess: (
      newState: Info,
      action: PayloadAction<PhraseKeys | undefined>
    ) => {
      return {
        progress: false,
        error: undefined,
        success: action.payload,
      }
    },
  },
})

export const { setProgress, setError, setSuccess } = slice.actions
export default slice.reducer
