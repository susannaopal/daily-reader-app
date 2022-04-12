export const fetchHeadlines = () => {
  return fetch ('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=dDvrAKGNk8RrCbAjVJQ7jsYBd1FL4mz0')
  .then(response => response.json());
}

export const fetchSingleSection = (section) => {
  return fetch (`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=dDvrAKGNk8RrCbAjVJQ7jsYBd1FL4mz0`)
  .then(response => response.json())
}
