const API_KEY = process.env.REACT_APP_API_KEY 

export const fetchHeadlines = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error()
      }
    })
    .catch(err => err)
}