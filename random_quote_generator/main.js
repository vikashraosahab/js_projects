let quoteDisplay = document.getElementById("quote_display")
let authorName = document.querySelector("#author span")
console.log (authorName)

async function fetchingData () {
    try {
      let url = 'https://dummyjson.com/quotes'
      let api = await fetch(url)
      console.log (api)
      if (!api.ok) {
        throw new Error (api.status)
      }
      if (api.status === 200) {
        return await api.json()
      }
    }
    catch (err) {
      return err;
    }
}

fetchingData ().then((res)=>{
    let random = Math.floor(Math.random() * 30) + 1
    let btn = document.querySelector("button").onclick = function () {
        random = Math.floor(Math.random() * 30) + 1 
        quoteDisplay.textContent = `${res['quotes'][random]['quote']}`
        authorName.textContent = `${res['quotes'][random]['author']}`
    }
    quoteDisplay.textContent = `${res['quotes'][random]['quote']}`
    authorName.textContent = `${res['quotes'][random]['author']}`
}).catch(err=>{
    quoteDisplay.textContent = `Error : ${err}`
})

