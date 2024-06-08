let output = document.querySelector('.output')
let pages = document.querySelector('.pages')
let search = document.querySelector('.search')

window.onload = function () {
    // basic load
    fetch('./news.json').then(r => r.json()).then(data => {
        if (data.length > 5) {
            data.slice(0, 5).forEach(e => {
                let id = data.indexOf(e)
                output.innerHTML += `<li>
<div> title: ${e.title} </div>
<div> content: ${e.content.slice(0, 3)}... </div>
<button class="readMore" onclick="clickme(id)" id=r_${data.indexOf(e)}>Read More</button>
</li>`
            })
        }
    }
    )
}

search.onkeyup = function () {
    let value = search.value
    fetch('./news.json').then(r => r.json()).then(data => {
        data.filter(n => n.content.includes(value)).forEach(e => {
            output.innerHTML = ''
            output.innerHTML += `<li>
<div> title: ${e.title} </div>
<div> content: ${e.content.slice(0, 3)}... </div>
<button class="readMore" id=r_${data.indexOf(e)}>Read More</button>
</li>`
        })
    })
    if (value == '') {
        fetch('./news.json').then(r => r.json()).then(data => {
            if (data.length > 5) {
                data.slice(0, 5).forEach(e => {
                    output.innerHTML += `<li>
<div> title: ${e.title} </div>
<div> content: ${e.content.slice(0, 3)}... </div>
<button class="readMore" id=r_${data.indexOf(e)}>Read More</button>
</li>`
                })
            }
        })
    }
}

function clickme(id) {
    let result
    fetch('./news.json').then(res => res.json()).then(data => {
        console.log(id.split('_')[1])
        console.log(data)
        result = data[id.split('_')[1]]
        console.log(result)
        alert(`title: ${result.title}\n content: ${result.content}`)
    })
}
