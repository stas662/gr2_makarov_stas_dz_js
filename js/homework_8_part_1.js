/*Написать код, который будет выполнять 4 действия на странице index.html:
1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, и распологает их вертикально.
2. Изменить цвет каждого квадрата на зеленый, и увеличить размер до 100 на 100 пикселей.
3. Изменить цвет каждого 3-го квадрата на красный, остальных на желтый.
4. Удалить все квадраты, и сделать фон страницы черным.
Каждое действие должно выполниться через 3 секунды от предыдущего, первое действие также должно иметь задержку 3 секунды.*/

//Создаём элементы с голубым цветом размером 50х50 даём отсуп
function createSquare() {

	let divSquare = document.createElement('div');
	document.querySelector('#square');
	divSquare.setAttribute('id', 'square');

	divSquare.style.width = '50px';
	divSquare.style.height = '50px';
	divSquare.style.background = '#87CEEB';
	
	//Оступ надо задать так как элементы слипаются
	divSquare.style.marginBottom = '5px';
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

const MS_SECOND = 1000;

setTimeout( function() {
	for (let i = 0; i < 10; i++) {
		createSquare();
	}

}, MS_SECOND * 3);

setTimeout(changeСolor, MS_SECOND * 6);
setTimeout(changeElementColor, MS_SECOND * 9);
setTimeout(clearElements, MS_SECOND * 12);
