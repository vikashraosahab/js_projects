let input = document.querySelector("input")
let data;
input.addEventListener("input",(e)=>{
    data = e.target.value;
})

let setData = document.getElementsByTagName("button")[0]
let getData = document.getElementsByTagName("button")[1]

setData.onclick = function () {
    let jsonData = {
        data : data,
        id : new Date().toDateString ()
    }
    localStorage.setItem("savedData",JSON.stringify(jsonData));
    alert ("Your data is stored to the localStorage !")
}

getData.onclick = function () {
    let folder = document.getElementsByTagName("li")[0]
    let showData = localStorage.getItem("savedData");
    if (showData) {
      let obj = JSON.parse(showData)
      folder.innerHTML = `<li>${obj['data']} </li>`
    }
    else {
      folder.textContent = "No data found !"
    }
}