const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function getDiffDay(date1, date2) {
	if (date1 instanceof Date && !isNaN(date1) && date2 instanceof Date && !isNaN(date2)) {
		let msDay = Math.abs(date1.getTime() - date2.getTime());
		let result = Math.trunc(msDay / MS_DAY);
		return result;
	}
	
	return null;
}

let date1 = new Date('2010-01-20');
let date2 = new Date('2010-01-15');
let result = getDiffDay(date1, date2);
console.log(result);