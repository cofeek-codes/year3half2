type Post {
	id: number,
	title: string,
	content: string,
	stats: {
		likes: number,
		  reposts number
	 }
}

let myPost: Post = { ...} 
