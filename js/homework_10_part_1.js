/*Домашнее задание! 
С помощью метода fetch получить масcив данных по Google Api Calendar или {JSON} Placeholder Fake Api
и вывести его на страницу с версткой в виде блоков.
Каждый блок должен содержать стилизованный текст, картинку (статичную по умолчанию, или рандомную, или по ссылке из данных) 
и 2 кнопки с такими действиями: alert([любая инфа по этому объекту]) и удаление блока со страницы.
Генерацию блоков обертнуть в асинхронную функцию, добавление блоков в дерево сделать синхронной функцией.

Сделайте обязательно хотя бы ту часть, которую сможете!
Все вопросы и уточнения по заданию пишем сюда, чтобы ВСЕ были в курсе.*/

//Примечание, с условием намного удобнее нужно будет его добавить во все работы

$(document).ready(async function(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then((response) => response.json())
	.then((json) => {

		getNewBlock(json);

	}).then((newBlock)  => {
		for (let i = 0; i < array.length; i++) {
			$('body').append(array[i]);
		}
	})
})

let array = [];

//Основная функция генерации блоков
async function getNewBlock(json) {
	for (let i = 0; i < json.length; i++) {
		let newBlock = document.createElement('div');
		newBlock.id = 'block';
		array.push(newBlock);

		$(newBlock).css({
			marginBottom: '5px',
			display: 'flex',
			maxWidth: '250px',
			
			flexDirection: 'column',
		})
		
		getListOfObjects(json[i], i, newBlock);

		//Проверка асинхронности
		setTimeout(function() {
			console.log('sdds');
		}, 2000)

		getBlockWithPicture(newBlock);
		getBlockWithbButtonAlert(newBlock);
		getBlockWithbButtonRemove(newBlock);
		
	}
}

let arrayKey = [];
//Функция получения записей и массива ключей для вывода в alert
async function getListOfObjects(json, i, newFilledBlock) {
	for (const [key, value] of Object.entries(json)) {
		if (typeof(value) == 'object') {
			getListOfObjects(value, i, newFilledBlock);
		} else {
			//console.log(`${key}: ${value}`)
			$(newFilledBlock).append(`${key}: ${value} </br>`);
			if (key == 'city') {
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
		alt: 'cat',
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

		var parent = newBlockButtonRemove.parentNode;
		var grand_father = parent.parentNode;
		grand_father.removeChild(parent);

		//Проверка того, что ключ элемента так же удалился вмести с блоком
		console.log(arrayKey);
	})
}
