export const fetchHeadlines = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4bxWhQUEJsgqskrAo23GYzh6xYoBnPOE')
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error()
      }
    })
    .catch(err => err)
}