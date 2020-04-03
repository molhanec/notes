import reducer, {
  initialState,
  setProgress,
  setSuccess,
  setError,
} from "./infoSlice"

describe("info reducer", () => {
  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual(initialState)
  })

  it("should handle setProgress", () => {
    expect(
      reducer(initialState, {
        type: setProgress.type,
        payload: true,
      })
    ).toEqual({ ...initialState, progress: true })
    expect(
      reducer(initialState, {
        type: setProgress.type,
        payload: false,
      })
    ).toEqual({ ...initialState, progress: false })
    expect(
      reducer(initialState, {
        type: setProgress.type,
        payload: undefined,
      })
    ).toEqual({ ...initialState, progress: true })
  })

  it("should handle setError", () => {
    expect(
      reducer(initialState, {
        type: setError.type,
        payload: "noteCreateFailure",
      })
    ).toEqual({ ...initialState, error: "noteCreateFailure" })
  })

  it("should handle setSuccess", () => {
    expect(
      reducer(initialState, {
        type: setSuccess.type,
        payload: "noteCreateSuccess",
      })
    ).toEqual({ ...initialState, success: "noteCreateSuccess" })
  })
})
