import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit"
import { connectRouter, routerMiddleware } from "connected-react-router"
import { createBrowserHistory } from "history"

import notesReducer from "../features/noteList/notesSlice"
import noteDetailsReducer from "../features/noteDetails/noteDetailsSlice"
import infoReducer from "../features/info/infoSlice"
import languageReducer from "../features/languageSwitch/languageSwitchSlice"

export const history = createBrowserHistory()

export const store = configureStore({
  reducer: {
    router: connectRouter(history) as any,
    info: infoReducer,
    notes: notesReducer,
    noteDetails: noteDetailsReducer,
    language: languageReducer,
  },
  middleware: [...getDefaultMiddleware(), routerMiddleware(history)],
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
