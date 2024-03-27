let url = "https://jsonplaceholder.typicode.com/todos"
fetch(url)
	.then((promise) => {
		return promise
			.json()
			.then((data) => {
				let outBlock = document.querySelector('.out')
				let todo = data[0] // пока возьмем только первый объект

				outBlock.innerHTML += `id: ${todo.id}; название: ${todo.title}; выполнен: ${todo.completed}`

			})
			.catch((err) => {
				console.log(err);
			});
	})
	.catch((err) => {
		console.log(err);
	});

