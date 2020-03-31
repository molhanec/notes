import { Action, configureStore, getDefaultMiddleware, ThunkAction } from '@reduxjs/toolkit'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import counterReducer from '../features/counter/counterSlice'
import notesReducer from '../features/notes/notesSlice'

export const history = createBrowserHistory()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    router: connectRouter(history) as any,
    notes: notesReducer,
  },
  middleware: [...getDefaultMiddleware(), routerMiddleware(history)],
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
