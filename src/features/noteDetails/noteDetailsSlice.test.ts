import reducer, {
  initialState,
  setNoteDetails,
  loadNoteDetailsAsync,
} from "./noteDetailsSlice"

jest.mock("../../app/data", () => {
  return {
    __esModule: true,
    fetchJson: async () => ({ id: 3, title: "fetchJson" }),
  }
})

describe("noteDetails reducer", () => {
  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual(initialState)
  })

  it("should handle setNoteDetails for real note", () => {
    const newNote = {
      id: 1,
      title: "title",
    }
    expect(
      reducer(initialState, {
        type: setNoteDetails.type,
        payload: newNote,
      })
    ).toEqual(newNote)
  })

  it("should handle setNoteDetails for undefined", () => {
    expect(
      reducer(initialState, {
        type: setNoteDetails.type,
        payload: undefined,
      })
    ).toEqual(initialState)
  })
})

test("loadNoteDetailsAsync thunk action", async () => {
  const dispatch = jest.fn()
  const getState = jest.fn()
  await loadNoteDetailsAsync("3")(dispatch, getState, undefined)
  expect(getState).toBeCalledTimes(0)

  expect(dispatch).toBeCalledWith({
    type: setNoteDetails.type,
    payload: { id: 3, title: "fetchJson" },
  })
})
