let divs = document.querySelectorAll('div')
let buttons = document.querySelectorAll('button')

for (let i = 1; buttons.length - 1; i++) {
    buttons[i - 1].onclick = function () {
        fetch(`page${i}.html`).then(res => res.text().then(data => {
            divs[i - 1].innerHTML = data
        }))
    }
}
