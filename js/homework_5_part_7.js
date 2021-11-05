function get_type_file(file_name) {
	if (typeof(file_name) !== 'string') {
		return null;
	}

	let dots = file_name.indexOf('.');
	file_name = file_name.slice(dots, file_name.length);

	return file_name;
}

let result = get_type_file('readme.txt');
console.log(result);
