/*Напишите функцию get_tomorrow(), которая возвращает завтрашнее число в формате 26 ноября 2019г*/

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function get_tomorrow(date) {
	if (date instanceof Date && !isNaN(date)) {

		const MONTH_NAMES = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

		let new_day = date.getTime() + MS_DAY;
		let result = new Date(new_day)

		return result.getDate() + ' ' + MONTH_NAMES[result.getMonth()] + ' ' + result.getFullYear();
	}
	
	return null;
}

let date = new Date();
let result = get_tomorrow(date);
console.log(result);
