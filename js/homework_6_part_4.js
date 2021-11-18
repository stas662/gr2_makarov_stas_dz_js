/*Напишите функцию get_count_days(date) , которая будет считать количество дней до Нового года от date, 
  если оно задано, иначе посчитать количество дней от текущей даты*/

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function  get_count_days(date) {
	let result = 0;

	function get_date_new_year(date) {
		return new Date(date.getFullYear() + 1, 0, 1);
	}

	if (date instanceof Date && !isNaN(date)) {

		let date_new_year = get_date_new_year(date);
		result = Math.round((date_new_year.getTime() - date.getTime()) / MS_DAY);
		
		return result;
	}
	
	date = new Date();
	let date_new_year = get_date_new_year(date);
	result = Math.round((date_new_year.getTime() - date.getTime()) / MS_DAY);

	return result;
}

let date = new Date('2021-12-30');
//let date = 'новый год';
let result = get_count_days(date);
console.log(`Ответ: ${result}`);
