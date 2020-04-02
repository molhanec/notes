import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LanguageCodes, defaultLanguage } from "../../app/translations"

export interface Language {
  code: LanguageCodes
}

const initialState: Language = {
  code: defaultLanguage,
}

const slice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (newState: Language, action: PayloadAction<"cz" | "en">) => ({
      code: action.payload,
    }),
  },
})

export const { setLanguage } = slice.actions
export default slice.reducer
