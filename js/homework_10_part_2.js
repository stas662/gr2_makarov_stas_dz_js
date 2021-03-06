/*Домашнее задание! 
С помощью метода fetch получить масcив данных по Google Api Calendar или {JSON} Placeholder Fake Api
и вывести его на страницу с версткой в виде блоков.
Каждый блок должен содержать стилизованный текст, картинку (статичную по умолчанию, или рандомную, или по ссылке из данных) 
и 2 кнопки с такими действиями: alert([любая инфа по этому объекту]) и удаление блока со страницы.
Генерацию блоков обертнуть в асинхронную функцию, добавление блоков в дерево сделать синхронной функцией.

Сделайте обязательно хотя бы ту часть, которую сможете!
Все вопросы и уточнения по заданию пишем сюда, чтобы ВСЕ были в курсе.
fetch(`https://www.googleapis.com/calendar/v3/calendars/makarov.stas.2018@gmail.com/events?key=AIzaSyAAVYVbtDd4-zbF3oIq-Sj6dVwd9sUVMZA&singleEvents=true&orderBy=starttime&timeMin=2021-11-23T10:00:00-07:00&timeMax=2021-11-24T10:00:00-07:00`)
fetch('https://jsonplaceholder.typicode.com/users')
*/

let startDate = null;
let startDate2 = null;
let finishDate = new Date();
let array = [];

$(document).ready(function () {
    fetch(`https://www.googleapis.com/calendar/v3/calendars/makarov.stas.2018@gmail.com/events?key=AIzaSyAAVYVbtDd4-zbF3oIq-Sj6dVwd9sUVMZA&singleEvents=true&orderBy=starttime&timeMin=2021-11-22T10:00:00-00:00&timeMax=2021-11-24T10:00:00-00:00`)
	.then((response) => response.json())
	.then((json) => {
		
		getNewBlock(json.items);
		
	}).then((newBlock)  => {
		startDate = new Date();

		array.forEach(async item => {
			$('body').append(item);
		}) 

		startDate2 = new Date();
		console.log('Время обработки данных', startDate - finishDate)
		console.log('Время работы всей функции', startDate2 - finishDate)
	})
})

//Основная функция генерации блоков
async function getNewBlock(json) {
	let j = 100;

	while (--j) {
		for (let i = 0; i < json.length; i++) {
			
			let newBlock = document.createElement('div');
			newBlock.id = 'block';
			
			$(newBlock).css({
				marginBottom: '5px',
				display: 'flex',
				maxWidth: '250px',
				
				flexDirection: 'column',
			})
			
			getListOfObjects(json[i], newBlock);

			getBlockWithPicture(newBlock);
			getBlockWithbButtonAlert(newBlock);
			getBlockWithbButtonRemove(newBlock);	

			array.push(newBlock);
		}
		
	}
}

let arrayKey = [];
//Функция получения записей и массива ключей для вывода в alert
async function getListOfObjects(json, newFilledBlock) {
	for (const [key, value] of Object.entries(json)) {
		if (typeof(value) == 'object') {
			continue;
		} else {
			$(newFilledBlock).append(`${key}: ${value} </br>`);

			if (key == 'summary') {
				arrayKey.push(`${key} ${value}`);
			}
		}
	}
}




//Генерация картинки
async function getBlockWithPicture(block) {
	let newBlockImg = document.createElement('img');

	$(newBlockImg).attr({
		src: 'https://memepedia.ru/wp-content/uploads/2019/12/screenshot_22-1-768x575.png',
		alt: 'img',
	});

	$(block).prepend($(newBlockImg));
}

//Генерация кнопки с вызовом alert
async function getBlockWithbButtonAlert(block) {
	let buttonAlert = document.createElement('button');

	$(buttonAlert).attr({
		name: 'alert',
	});

	$(buttonAlert).text('Вывести alert');
	$(block).append($(buttonAlert));

	/*Интересная альтернатива поиска индекса нажатой кнопки
	Примечание очень странно работает
	var nodes = document.getElementsByName('alert');

	$(buttonAlert).click(function() {
		for (var i = 0; i < nodes.length; i++) {
			//Регистрация события клик и поиск индекса, при нахождении индекса фиксируем его с помощью bind
		   	nodes[i].addEventListener('click', function(index) {
		      	alert(arrayKey[index]);
		   	}.bind(this, i));
		}
	});*/

	$(buttonAlert).click(function() {
		//Индекс больше на 2 единицы 
		//Примечание разобраться в чём проблема 

		let index = $(this).parent().index();
		alert(arrayKey[index-2]);
	})
}

//Генерация кнопки удаления
async function getBlockWithbButtonRemove(block) {
	let newBlockButtonRemove = document.createElement('button');

	$(newBlockButtonRemove).text('Удалить блок');
	$(block).append($(newBlockButtonRemove));

	$(newBlockButtonRemove).click(function() {
		//Индекс больше на 2 единицы 
		//Примечание разобраться в чём проблема

		let index = $(this).parent().index();
		arrayKey.splice(index-2, 1);

		let confirmation = confirm(`Вы точно хотите удалить блок №${index-1}`);

		if (confirmation) {
			var parent = newBlockButtonRemove.parentNode;
			var grand_father = parent.parentNode;
			grand_father.removeChild(parent);
		}

		//Проверка того, что ключ элемента так же удалился вмести с блоком
		//console.log(arrayKey);
	})
}