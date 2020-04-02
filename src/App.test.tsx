import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"

test("App matches snapshot", () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(container).toMatchSnapshot()
})
