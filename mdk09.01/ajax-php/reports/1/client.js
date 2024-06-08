let searchInput = document.getElementById('search__input')
let searchResult = document.getElementById('search__input').value
let searchButton = document.getElementById('search__btn')
let outputList = document.getElementById('output')


searchInput.onkeyup = function () {
    if (searchInput.value != '') {
        fetch('./data.json').then(res => res.json()).then(data => {
            data.forEach(el => {

                if (el.name.includes(searchInput.value)) {
                    outputList.innerHTML += `<li>${el.name}</li>`
                }
            })
        })

    }
}
