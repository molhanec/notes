import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../app/store"
import { Info } from "./Info"

describe("<Info>", () => {
  it("matches snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <Info
          progress={true}
          error="noteCreateFailure"
          success="noteCreateSuccess"
        />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })
})
