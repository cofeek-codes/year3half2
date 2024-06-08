let categorySelector = document.querySelector('select')
let outSelector = document.querySelector('.out')

categorySelector.onchange = function () {
    console.log(categorySelector.value)
    switch (categorySelector.value) {
        case "fruits":
            fetch('./data.json').then(res => res.json()).then(data => {
                outSelector.innerHTML = ''
                data[0].fruits.forEach(e => {
                    outSelector.innerHTML += `
    <option value="">${e}</option>
    `
                })
            })
            break
        case "vegetables":
            fetch('./data.json').then(res => res.json()).then(data => {
                console.log(data)
                outSelector.innerHTML = ''
                data[0].vegetables.forEach(e => {
                    outSelector.innerHTML += `
    <option value="">${e}</option>
    `
                })
            })


            break


    }
}
