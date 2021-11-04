let word = prompt('Введите слово:');

function vice_versa (string) {
	let outgoing_array = new Array();

	for (let i = 0; i < string.length; i++) {
		outgoing_array.unshift(string[i]);
	}
	return outgoing_array;
}

let result = vice_versa(word); 
console.log(result.join(''));
