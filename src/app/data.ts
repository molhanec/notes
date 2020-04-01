import { AppThunk } from "./store"

const rootDataUrl = "https://private-anon-3ab0da907c-note10.apiary-mock.com/"

const errorHandler = (response: Response) => {
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
    .then(errorHandler)
    .then(response => response!.json() as Promise<T>)

export const addNoteAsync = (title: string): AppThunk => async dispatch => {}
