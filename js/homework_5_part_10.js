function get_random(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}

	//Функия, которая возвращает случае целое число от min до max
	function random(min, max) {
		if (isNaN(min) || isNaN(max)) {
			return null;
		}

		let result = 0;
		let randomNumber = Math.random();

		result = (max - min) * randomNumber + min;
		return Math.floor(result);
	}

	let result = random(0, arr.length);
	return arr[result];
}

let arr = [5, 12, 78, -4, 223, 0];
let result =  get_random(arr);
console.log(arr);
console.log(result);