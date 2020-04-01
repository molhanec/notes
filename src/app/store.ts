import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit"
import { connectRouter, routerMiddleware } from "connected-react-router"
import { createBrowserHistory } from "history"

import counterReducer from "../features/counter/counterSlice"
import notesReducer from "../features/noteList/notesSlice"
import noteDetailsReducer from "../features/noteDetails/noteDetailsSlice"
import infoReducer from "../features/info/infoSlice"

export const history = createBrowserHistory({ forceRefresh: true })

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    router: connectRouter(history) as any,
    info: infoReducer,
    notes: notesReducer,
    noteDetails: noteDetailsReducer,
  },
  middleware: [...getDefaultMiddleware(), routerMiddleware(history)],
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
