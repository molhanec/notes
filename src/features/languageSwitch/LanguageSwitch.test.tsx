import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../app/store"
import { LanguageSwitch } from "./LanguageSwitch"

describe("<LanguageSwitch>", () => {
  it("matches snapshot", () => {
    const setLanguage = jest.fn()
    const { container } = render(
      <Provider store={store}>
        <LanguageSwitch language="cz" setLanguage={setLanguage as any} />
      </Provider>
    )

    expect(container).toMatchSnapshot()
  })

  it("calls setLanguage when button clicked", () => {
    const setLanguage = jest.fn()
    const { getByText } = render(
      <Provider store={store}>
        <LanguageSwitch language="cz" setLanguage={setLanguage as any} />
      </Provider>
    )

    const enButton = getByText("En")
    fireEvent.click(enButton)
    expect(setLanguage).toBeCalledWith("en")

    const czButton = getByText("Cz")
    fireEvent.click(czButton)
    expect(setLanguage).toBeCalledWith("cz")
  })
})
