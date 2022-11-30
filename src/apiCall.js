const apiKey = process.env.REACT_APP_API_KEY 
console.log("1-apiKey", apiKey)

export const fetchHeadlines = () => {
    console.log("2-apiKey", apiKey)

  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`)
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error()
      } 
    })
    .catch(err => err)
};