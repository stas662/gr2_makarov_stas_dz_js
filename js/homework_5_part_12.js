function get_uniq_arr(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}

	//Проверка на повторение элементов
	function check(arr, item) {
		let result = true;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === item) {
				result = false;
			}
		}
		return result;
	}

	let result = [];
	for (let i = 0; i < arr.length; i++) {
		let element = arr[i];
		let check_element = (check(result, element));
		if (check_element) {
			result.push(element);
		}
		
	}
	return result;
}

let array = [5, 12, 78, -4, 223, 0, 2, 2, 5, 5, 78, -4, 6];
let result =  get_uniq_arr(array);
console.log(result);