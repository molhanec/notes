import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../app/store"
import Header from "./Header"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"

describe("<Header>", () => {
  it("matches snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <Router history={createMemoryHistory()}>
          <Header />
        </Router>
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })
})
