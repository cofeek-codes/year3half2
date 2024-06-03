let searchResult = document.getElementById('search__input').value
let searchButton = document.getElementById('search__btn')
let outputList = document.getElementById('output')

getData = () => {
    let url = new URL('http://localhost:8080/ajax.php')
    url.search = new URLSearchParams({ search: searchResult })
    let extractedData
    fetch(url, {
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => {
            if (!res.ok)
                throw new Error('request error')
            return res.json()
        }).then(data => {
            extractedData = Object.values(data)
            console.log(extractedData)
            extractedData.forEach(e => {
                outputList.innerHTML += `<li>${e}</li>`
            })
        })

}

searchButton.onclick = getData

