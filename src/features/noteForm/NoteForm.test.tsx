import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../app/store"
import { NoteForm } from "./NoteForm"
import { getPhrase } from "../../app/translations"

describe("<NoteForm>", () => {
  test("matches snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <NoteForm
          formHeader="Header"
          initialTitle="initial"
          onSubmit={jest.fn()}
          onDelete={jest.fn()}
        />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  test("calls onSubmit when Save button clicked", () => {
    const onSubmit = jest.fn()
    const { getByText } = render(
      <Provider store={store}>
        <NoteForm
          formHeader="Header"
          initialTitle="initial"
          onSubmit={onSubmit}
          onDelete={jest.fn()}
        />
      </Provider>
    )

    const saveButton = getByText(getPhrase("cz", "formSave"))
    fireEvent.click(saveButton)

    expect(onSubmit).toBeCalled()
  })

  test("calls onDelete when Delete button clicked", () => {
    const onDelete = jest.fn()
    const { getByText } = render(
      <Provider store={store}>
        <NoteForm
          formHeader="Header"
          initialTitle="initial"
          onSubmit={jest.fn()}
          onDelete={onDelete}
        />
      </Provider>
    )

    const deleteButton = getByText(getPhrase("cz", "formDelete"))
    fireEvent.click(deleteButton)

    expect(onDelete).toBeCalled()
  })
})
