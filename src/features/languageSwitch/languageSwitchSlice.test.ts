import reducer, { initialState, setLanguage } from "./languageSwitchSlice"

describe("languageSwitch reducer", () => {
  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual(initialState)
  })

  it("should handle setLanguage", () => {
    expect(
      reducer(initialState, {
        type: setLanguage.type,
        payload: "en",
      })
    ).toEqual({ code: "en" })
  })
})
