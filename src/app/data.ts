import { AppThunk } from "./store"
import { loadNotesAsync } from "../features/noteList/notesSlice"
import { setProgress, setSuccess, setError } from "../features/info/infoSlice"

const rootDataUrl =
  "https://private-anon-3ab0da907c-note10.apiary-mock.com/notes"

const checkResponseStatus = (response: Response) => {
  if (response.ok) {
    return response
  } else {
    return Promise.reject(
      `Error fetching data: ${response.status} ${response.statusText}`
    )
  }
}

export const fetchJson = <T>(path: string) =>
  fetch(rootDataUrl + path)
    .then(checkResponseStatus)
    .then(response => response!.json() as Promise<T>)

export const addNoteAsync = (title: string): AppThunk => async dispatch => {
  dispatch(setProgress())
  try {
    fetch(rootDataUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    }).then(checkResponseStatus)

    dispatch(setSuccess("New note added"))
    dispatch(loadNotesAsync())
  } catch {
    dispatch(setError("Cannot add new note"))
  }
}
