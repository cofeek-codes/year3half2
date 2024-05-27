alert('test')

let div = document.querySelector('div')
let button = document.querySelector('button')

button.onclick = function () {
    let result = fetch("./ajax.html").then(res => {
        return res.text()
    }).then(text => { div.innerHTML = text })
}
