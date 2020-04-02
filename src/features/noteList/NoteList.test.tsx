import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../app/store"
import { NoteList } from "./NoteList"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"

test("<NoteList> matches snapshot", () => {
  const loadNotesAsync = jest.fn()
  const setNoteDetails = jest.fn()
  const { container } = render(
    <Provider store={store}>
      <Router history={createMemoryHistory()}>
        <NoteList
          notes={[
            {
              id: 1,
              title: "title 1",
            },
            {
              id: 2,
              title: "title 2",
            },
          ]}
          loadNotesAsync={loadNotesAsync}
          setNoteDetails={setNoteDetails as any}
        />
      </Router>
    </Provider>
  )

  expect(container).toMatchSnapshot()
  expect(loadNotesAsync).toBeCalled()
  expect(setNoteDetails).toBeCalledWith(undefined)
})
