import reducer, {
  initialState,
  setNote,
  setNotes,
  loadNotesAsync,
} from "./notesSlice"

jest.mock("../../app/data", () => {
  return {
    __esModule: true,
    fetchJson: async () => [{ id: 3, title: "fetchJson" }],
  }
})

describe("notes reducer", () => {
  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual(initialState)
  })

  it("should handle setNote", () => {
    const newNote = {
      id: 1,
      title: "title",
    }
    expect(
      reducer(initialState, {
        type: setNote.type,
        payload: newNote,
      })
    ).toEqual({ notes: [newNote] })
  })

  it("should handle setNotes", () => {
    const notes = [
      {
        id: 1,
        title: "title 1",
      },
      {
        id: 2,
        title: "title 2",
      },
    ]
    expect(
      reducer(initialState, {
        type: setNotes.type,
        payload: notes,
      })
    ).toEqual({ notes })
  })
})

test("loadNotesAsync thunk action", async () => {
  const dispatch = jest.fn()
  const getState = jest.fn()
  await loadNotesAsync()(dispatch, getState, undefined)
  expect(getState).toBeCalledTimes(0)

  expect(dispatch).toBeCalledWith({
    type: setNotes.type,
    payload: [{ id: 3, title: "fetchJson" }],
  })
})
