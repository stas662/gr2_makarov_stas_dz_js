/*Напишите функцию get_day(date), которая возвращает день недели от задан-ной даты. Например: get_day(’27-11-1988’) должно вернуть «воскресенье»*/

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function  get_day(date) {
	if (date instanceof Date && !isNaN(date)) {

		const DAYS_WEEK = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

		return DAYS_WEEK[date.getDay()];
	}

	return null;
}

let date = new Date('2022-01-01');
let result = get_day(date);
console.log(`Ответ: ${result}`);
