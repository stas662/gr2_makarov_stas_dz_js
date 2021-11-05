function count_symbol(symbol, string) {
	if (typeof(symbol) !== 'symbol' || typeof(string) !== 'string') {
		return null;
	}

	symbol = symbol.description.toUpperCase();

	let array = string.toUpperCase().split('');
	let result = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] === symbol) { 
			result++;
		}
	}

	return result;
}

let char = Symbol('б');
let result = count_symbol(char,'Белая берёза');
console.log(result);