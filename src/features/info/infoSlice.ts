import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Info {
  progress: boolean
  error?: string
  success?: string
}

const initialState: Info = {
  progress: false,
  error: undefined,
  success: undefined,
}

const slice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setProgress: (newState: Info, action: PayloadAction<void>) => {
      return {
        progress: true,
        error: undefined,
        success: undefined,
      }
    },
    setError: (newState: Info, action: PayloadAction<string>) => {
      return {
        progress: false,
        error: action.payload,
        success: undefined,
      }
    },
    setSuccess: (newState: Info, action: PayloadAction<string>) => {
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
