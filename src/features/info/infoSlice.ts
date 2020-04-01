import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Info {
  progress: boolean
  error?: string
  success?: string
}

interface InfoState {
  info: Info
}

const initialState: InfoState = {
  info: {
    progress: false,
    error: undefined,
    success: undefined,
  },
}

const slice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setProgress: (newState: InfoState, action: PayloadAction<void>) => {
      newState.info = {
        progress: true,
        error: undefined,
        success: undefined,
      }
    },
    setError: (newState: InfoState, action: PayloadAction<string>) => {
      newState.info = {
        progress: false,
        error: action.payload,
        success: undefined,
      }
    },
    setSuccess: (newState: InfoState, action: PayloadAction<string>) => {
      newState.info = {
        progress: false,
        error: undefined,
        success: action.payload,
      }
    },
  },
})

export const { setProgress, setError, setSuccess } = slice.actions
export default slice.reducer
