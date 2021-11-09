const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function  get_count_work_days(date1, date2) {
	if (date1 instanceof Date && !isNaN(date1) && date2 instanceof Date && !isNaN(date2)) {

		let first_date = date1.getTime();
		let last_date = date2.getTime();

		if (first_date > last_date) {
			 first_date = date2.getTime();	
			 last_date = date1.getTime();
		}

		let j = 0;

		while (first_date <= last_date) {
			let new_date = new Date(first_date);
			if (new_date.getDay() > 0 && new_date.getDay() < 6) {
				j++;
			}
			first_date += MS_DAY;
		}

		return j;
	}
	
	return null;
}

let date1 = new Date('2021-11-30');
let date2 = new Date('2021-11-01');
let result = get_count_work_days(date1, date2);
console.log(`Ответ: ${result}`);