// main.js
let url = "https://jsonplaceholder.typicode.com/todos"
fetch(url)
	.then((promise) => {
		return promise
			.json()
			.then((data) => {
				let outBlock = document.querySelector('.todo__list')
				for (let i = 0; i < 5; i++) { // цикл для вывода в список

					let todo = data[i]

					outBlock.innerHTML += `<li>id: ${todo.id}; название: ${todo.title}; выполнен: ${todo.completed}</li>`
				}
			})
			.catch((err) => {
				console.log(err);
			});
	})
	.catch((err) => {
		console.log(err);
	});

