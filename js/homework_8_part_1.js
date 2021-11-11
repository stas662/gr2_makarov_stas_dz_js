//Создаём элементы с голубым цветом размером 50х50 даём отсуп и выравниваем по центру страницы, что бы лучше было видно
function createSquare() {

	let divSquare = document.createElement('div');
	document.querySelector('#square');
	divSquare.setAttribute('id', 'square');

	divSquare.style.width = '50px';
	divSquare.style.height = '50px';
	divSquare.style.background = '#87CEEB';
	divSquare.style.marginBottom = '5px';
	//divSquare.style.marginLeft = 'auto';
	//divSquare.style.marginRight = 'auto';

	document.body.append(divSquare);

}

//Перекрашиваем все элементы в зелёный цвет и меняем размер 100х100
function changeСolor() {
	let id = document.querySelectorAll('#square');
	for (let i = 0; i < id.length; i++) {
		id[i].style.background = '#008000';
		id[i].style.width = '100px'; 
		id[i].style.height = '100px';
	}
}

//Перекрашиваем все элементы в жёлтый, но каждый 3 элемент делаем красным
function changeElementColor() {
	let id = document.querySelectorAll('#square');
	for (let i = 0; i < id.length; i++) {
		id[i].style.background = '#FFFF00';
		
		if (((i + 1) % 3 === 0) && (i !== 0)) {
			id[i].style.background = '#FF0000';
		}

	}
}

//Удаляем созданные элементы и устанавливаем чёрный фон
function clearElements() {
	document.body.style.background = '#000000';
	let id = document.querySelectorAll('#square')
	for (let i = 0; i < id.length; i++) {
		id[i].remove();
	}
	
}

//Для проверки входных параметров
let result = false;

//Вызов функций с таймером
function getSetTimeout(item, time) {
	
	if ((typeof(item) !== 'function') || (typeof(time) !== 'number') || (result)) {
		result = true;
		return null;
	}

	result = false;

	setTimeout( function() {
		for (let i = 0; i < 10; i++) {
			item();
		}

	}, time * 1000);
}

getSetTimeout(createSquare, 3);
getSetTimeout(changeСolor, 6);
getSetTimeout(changeElementColor, 9);
getSetTimeout(clearElements, 12);
