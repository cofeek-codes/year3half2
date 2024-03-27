function isThree<T>(arr: T[]): T | null {
	return arr.length >= 3 ? arr[2] : null
}

console.log(isThree([1, 2, 3]))
console.log(isThree([true, true, false]))
console.log(isThree([]))
