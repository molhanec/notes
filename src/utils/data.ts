const errorHandler = (response: Response) => {
  if (response.ok) {
    return response
  } else {
    return Promise.reject(
      `Error fetching data: ${response.status} ${response.statusText}`
    )
  }
}

export const fetchJson = <T>(url: string) =>
  fetch(url)
    .then(errorHandler)
    .then(response => response!.json() as Promise<T>)
