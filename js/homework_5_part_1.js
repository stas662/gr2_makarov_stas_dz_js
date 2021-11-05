function random(min, max) {
	if (isNaN(min) || isNaN(max)) {
		return null;
	}

	let result = 0;
	let randomNumber = Math.random();

	result = (max - min) * randomNumber + min;
	return Math.floor(result);
}

let result = random(0, 100);
console.log(result);