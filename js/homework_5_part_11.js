function get_max(arr) {
	if (!Array.isArray(arr))  {
		return null;
	}

	//Проверка элементов массива
	function type_number(arr) {
		for (let i = 0; i < arr.length; i++) {
			if (isNaN(arr[i])) {
				return true;
			}
		}
	}

	let check = arr.some(type_number);
	if (check === true) {
		return null;
	}

	let result = -Infinity;
	for (let i = 0; i < arr.length; i++) {
		if (Number(arr[i]) > result) result = Number(arr[i]);
	}
	return result;
}

let arr = [5, 12, 78, -4, 223, 0];
let result =  get_max(arr);
console.log(result);