let div = document.querySelector('div')
let btn = document.querySelector('button')

btn.onclick = function () {
    fetch('./page.html').then(res => {
        if (res.status != 200) {
            throw new Error(`${res.status}`)
        }
    })
}
