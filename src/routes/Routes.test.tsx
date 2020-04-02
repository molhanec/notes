import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import { render } from "@testing-library/react"
import React from "react"
import { Routes } from "./Routes"

jest.mock("./Main", () => {
  return {
    __esModule: true,
    MainRoute: () => "Main",
  }
})

jest.mock("../features/noteDetails/NoteDetails", () => {
  return {
    __esModule: true,
    default: () => "NoteDetails",
  }
})

const renderRoute = (route: string) =>
  render(
    <Router history={createMemoryHistory({ initialEntries: [route] })}>
      <Routes />
    </Router>
  )

describe("Routes", () => {
  test("Main route", () => {
    const { getByText } = renderRoute("")
    expect(getByText("Main")).toBeTruthy()
  })

  test("Note detail route", () => {
    const { getByText } = renderRoute("/note/2")
    expect(getByText("NoteDetails")).toBeTruthy()
  })
})
