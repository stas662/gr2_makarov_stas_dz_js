/*Написать код, который будет выполнять 5 действия на странице index.html:
1. Создать 100 квадратов голубого цвета размером 70*70 пикселей, и распологает их вертикально.
2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 100*100 пикселей.
3. Вывести на каждом квадрате его порядковый номер.
4. Изменить цвет каждого 3-го квадрата на красный, каждый 15 квадрат сделать треугольником цветом хаки и любые 5 сделать желтым.
5. Удалить все красные квадраты.
Каждое действие должно выполниться через 2 секунды от предыдущего, первое действие также должно иметь задержку 2 секунды.
сделать на jQuery*/

//Назначаем квадрату голубой цвет и задаём размер 70х70 пикселей
function createSquare() {
	$('body').append('<div id="square"></div>'); 

	$('div#square').css({
		width: '70px',
		height: '70px',
		background: '#87CEEB',
		marginBottom: '5px',
	});
}

//Изменение цвета каждого квадрата на фиолетовый, и увеличение размера до 100х100 пикселей
function changeСolor() {
	$('div#square').css({
		width: '100px',
		height: '100px',
		background: '#800080',
	});
}

//Вывод на каждом квадрате его порядковый номер
function getNumber() {
	$('div#square').text(function(index){
		return index + 1;
	});
}

//Изменение цвета каждого 3-го квадрата на красный, при этом каждый 15 квадрат становится треугольником цветом хаки и любые 5 элементов делаем желтым
function changeElementColor() {
	for (let i = 0; i < $('div#square').length; i++) {
	
		if (((i + 1) % 3 === 0) && (i !== 0)) {
			$('div').eq(i).css({
				background: '#FF0000',
			})
		}

		if (((i + 1) % 15 === 0) && (i !== 0)) {
			$('div').eq(i).css({
				background: 'linear-gradient(to right bottom, transparent 50%, #78866b 50%) left / 50% 100% no-repeat, linear-gradient(to left bottom, transparent 50%, #78866b 50%) right / 51% 100% no-repeat',
			})
		}

		if (i % 20 === 0) {
			$('div').eq(i).css({
				background: '#FFFF00',
			})
		}

	}
}

//Удаление всех красных квадратов
function clearElements() {
	for (let i = 0; i < $('div#square').length; i++) {
		if ($('div').eq(i).css('background-color') == 'rgb(255, 0, 0)') {
			$('div').eq(i).remove();
		}
	}
}

const MS_SECOND = 1000;

$(document).ready(function() {
	setTimeout( function() {
		for (let i = 0; i < 100; i++) {
			createSquare();
		}
	}, MS_SECOND * 2);

	setTimeout(changeСolor, MS_SECOND * 4);
	setTimeout(getNumber, MS_SECOND * 6);
	setTimeout(changeElementColor, MS_SECOND * 8);
	setTimeout(clearElements, MS_SECOND * 10);
});
