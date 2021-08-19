export function ApiTrivia<TResponse>(url: string): Promise<TResponse> {
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      throw new Error(response.error)
    })
};