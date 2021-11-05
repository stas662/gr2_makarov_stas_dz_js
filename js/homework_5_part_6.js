function truncate(str, maxlength) {
	if (typeof(str) !== 'string' || typeof(maxlength) !== 'number') {
		return null;
	}

	if (str.length > maxlength) {
		str = str.slice(0, maxlength - 3);
		str = str + '...';
	}
	
	return str;
}

let result = truncate('text123456789text', 10);
console.log(result);
