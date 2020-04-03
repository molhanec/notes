import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../app/store"
import { EditNoteForm } from "./EditNoteForm"
import { getPhrase } from "../../app/translations"

describe("<EditNoteForm>", () => {
  test("matches snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <EditNoteForm
          progress={false}
          noteDetails={{ id: 1, title: "title" }}
          updateNoteAsync={jest.fn()}
          onDelete={jest.fn()}
        />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  test("calls updateNoteAsync when Save button clicked", () => {
    const updateNoteAsync = jest.fn()
    const { getByText } = render(
      <Provider store={store}>
        <EditNoteForm
          progress={false}
          noteDetails={{ id: 1, title: "title" }}
          updateNoteAsync={updateNoteAsync}
          onDelete={jest.fn()}
        />
      </Provider>
    )

    const saveButton = getByText(getPhrase("cz", "formSave"))
    fireEvent.click(saveButton)

    expect(updateNoteAsync).toBeCalled()
  })

  test("calls onDelete when Delete button clicked", () => {
    const onDelete = jest.fn()
    const { getByText } = render(
      <Provider store={store}>
        <EditNoteForm
          progress={false}
          noteDetails={{ id: 1, title: "title" }}
          updateNoteAsync={jest.fn()}
          onDelete={onDelete}
        />
      </Provider>
    )

    const deleteButton = getByText(getPhrase("cz", "formDelete"))
    fireEvent.click(deleteButton)

    expect(onDelete).toBeCalled()
  })
})
