import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../app/store"
import { MainRoute } from "./Main"

test("<Main> matches snapshot", () => {
  const { container } = render(
    <Provider store={store}>
      <MainRoute />
    </Provider>
  )

  expect(container).toMatchSnapshot()
})
