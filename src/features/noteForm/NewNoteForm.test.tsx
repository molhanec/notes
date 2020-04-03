import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../app/store"
import { EditNoteForm } from "./EditNoteForm"
import { getPhrase } from "../../app/translations"
import { NewNoteForm } from "./NewNoteForm"

describe("<NewNoteForm>", () => {
  test("matches snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <NewNoteForm progress={false} addNoteAsync={jest.fn()} />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  test("calls addNoteAsync for non-empty title when Save button clicked", () => {
    const addNoteAsync = jest.fn()
    const { getByText, getByDisplayValue } = render(
      <Provider store={store}>
        <NewNoteForm progress={false} addNoteAsync={addNoteAsync} />
      </Provider>
    )

    const input = getByDisplayValue("")
    fireEvent.change(input, { target: { value: "X" } })

    const saveButton = getByText(getPhrase("cz", "formSave"))
    fireEvent.click(saveButton)

    expect(addNoteAsync).toBeCalled()
  })

  test("does not call addNoteAsync for empty title when Save button clicked", () => {
    const addNoteAsync = jest.fn()
    const { getByText } = render(
      <Provider store={store}>
        <NewNoteForm progress={false} addNoteAsync={addNoteAsync} />
      </Provider>
    )

    const saveButton = getByText(getPhrase("cz", "formSave"))
    fireEvent.click(saveButton)
    expect(addNoteAsync).not.toBeCalled()
  })
})
