import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../app/store"
import { NoteDetails } from "./NoteDetails"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import { getPhrase } from "../../app/translations"

describe("<NoteDetails>", () => {
  it("matches snapshot", () => {
    const loadNoteDetailsAsync = jest.fn()
    const setNoteDetails = jest.fn()
    const deleteNoteAsync = jest.fn()
    const { container } = render(
      <Provider store={store}>
        <Router history={createMemoryHistory()}>
          <NoteDetails
            noteDetails={{
              id: 1,
              title: "title 1",
            }}
            match={{
              params: {
                noteId: "1",
              },
              isExact: false,
              path: "",
              url: "",
            }}
            loadNoteDetailsAsync={loadNoteDetailsAsync}
            setNoteDetails={setNoteDetails as any}
            deleteNoteAsync={deleteNoteAsync}
            history={{} as any}
            location={{} as any}
          />
        </Router>
      </Provider>
    )

    expect(container).toMatchSnapshot()
    expect(loadNoteDetailsAsync).toBeCalled()
    expect(setNoteDetails).toBeCalledWith(undefined)
  })

  it("calls deleteNoteAsync when Delete button clicked", () => {
    const loadNoteDetailsAsync = jest.fn()
    const setNoteDetails = jest.fn()
    const deleteNoteAsync = jest.fn()
    const { getByText } = render(
      <Provider store={store}>
        <Router history={createMemoryHistory()}>
          <NoteDetails
            noteDetails={{
              id: 1,
              title: "title 1",
            }}
            match={{
              params: {
                noteId: "1",
              },
              isExact: false,
              path: "",
              url: "",
            }}
            loadNoteDetailsAsync={loadNoteDetailsAsync}
            setNoteDetails={setNoteDetails as any}
            deleteNoteAsync={deleteNoteAsync}
            history={{} as any}
            location={{} as any}
          />
        </Router>
      </Provider>
    )

    const deleteButton = getByText(getPhrase("cz", "formDelete"))
    fireEvent.click(deleteButton)

    expect(deleteNoteAsync).toBeCalled()
  })
})
