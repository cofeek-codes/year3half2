// main.js

fetch("https://jsonplaceholder.typicode.com/todos")
	.then(response => response.json())
	.then(todos => {
		// // Filter for the first 5 completed todos
		// const completedTodos = todos.filter(todo => todo.completed).slice(0, 5);

		// Create table rows for each completed todo
		const tableBody = document.getElementById('todos__table').getElementsByTagName('tbody')[0];
		for (let i = 0; i < 15; i++) {
			let todo = todos[i]
			if (todo.completed) {

				const row = tableBody.insertRow();
				row.insertCell(0).textContent = todo.id;
				row.insertCell(1).textContent = todo.title;
				row.insertCell(2).textContent = todo.completed ? 'Yes' : 'No';
			}
		}
	})
	.catch(error => console.error('Error:', error));
