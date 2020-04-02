import { AppThunk } from "./store"
import { setNote } from "../features/noteList/notesSlice"
import { setProgress, setSuccess, setError } from "../features/info/infoSlice"
import { push } from "connected-react-router"
import { setNoteDetails } from "../features/noteDetails/noteDetailsSlice"
import { batch } from "react-redux"

if (!process.env.REACT_APP_ROOT_URL) {
  throw new Error("Please specify REACT_APP_ROOT_URL environment variable!")
}
const rootDataUrl = process.env.REACT_APP_ROOT_URL

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
  fetch(rootDataUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
    }),
  })
    .then(checkResponseStatus)
    .then(response => response.json())
    .then(note => {
      batch(() => {
        dispatch(setSuccess("New note added"))
        dispatch(setNote(note))
      })
    })
    .catch(() => {
      dispatch(setError("Cannot add new note"))
    })
}

export const updateNoteAsync = (
  id: number,
  title: string
): AppThunk => async dispatch => {
  dispatch(setProgress())
  fetch(`${rootDataUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
    }),
  })
    .then(checkResponseStatus)
    .then(response => response.json())
    .then(note => {
      batch(() => {
        dispatch(setSuccess("Note updated"))
        dispatch(setNote(note))
      })
    })
    .catch(() => {
      dispatch(setError("Cannot update note"))
    })
}

export const deleteNoteAsync = (id: number): AppThunk => async dispatch => {
  dispatch(setProgress())
  fetch(`${rootDataUrl}/${id}`, {
    method: "DELETE",
  })
    .then(checkResponseStatus)
    .then(() => {
      batch(() => {
        dispatch(setNoteDetails(undefined))
        dispatch(setSuccess("Note deleted"))
        dispatch(push("/"))
      })
    })
    .catch(() => {
      dispatch(setError("Cannot delete note"))
    })
}
