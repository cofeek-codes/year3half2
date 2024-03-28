import axios from "axios"

axios.get('http://127.0.0.1:8000/api/posts/all').then(res => {
	console.log(res.data)
})
	.catch(err => {
		console.log(err)
	})



// axios.post('http://127.0.0.1:8000/api/posts/new', {
// 	title: 'title from code',
// 	content: 'content from code'
// }
// ).then(res => {
// 	console.log(res.data)
// })
// 	.catch(err => {
// 		console.log(err)
// 	})



// axios.put('http://127.0.0.1:8000/api/posts/update/1', { // данные для изменения/удаления в формате js-объекта (НЕ JSON)
// 	title: 'updated title from code',
// 	content: 'updated content from code',
// 	likes: 3
// }
// ).then(res => {
// 	console.log(res.data)
// })
// 	.catch(err => {
// 		console.log(err)
// 	})

import axios from "axios" // импорт

// axios.delete('http://127.0.0.1:8000/api/posts/delete/1')
// 	.then(res => {
// 		console.log(res.data)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	})

