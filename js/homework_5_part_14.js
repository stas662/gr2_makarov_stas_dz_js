function isEmpty(obj) {
	let result = true;

	if (Object.entries(obj).length === 0) {
		result = false;
	}

	return result;
}

var schedule = {
	//'8:30' : "подъём"
}
let result = isEmpty(schedule);
console.log(result);