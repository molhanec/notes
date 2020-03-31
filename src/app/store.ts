import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'
import notesReducer from '../features/notes/notesSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    notes: notesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
