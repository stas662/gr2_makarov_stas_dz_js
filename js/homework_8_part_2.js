let arrayColor = ['#808080', '#000000', '#008000', '#0000FF', '#FF0000', '#FFFF00', '#00FFFF', '#ADFF2F', '#FFA500'];
let arrayNameColor = ['Серый', 'Чёрный', 'Зелёный', 'Синий', 'Красный', 'Жёлтый', 'Бирюзовый', 'Жёлто-зелёный', 'Оранжевый'];

//Функия, которая возвращает случае целое число от min до max
function random(min, max) {
	if (isNaN(min) || isNaN(max)) {
		return null;
	}

	let result = 0;
	let randomNumber = Math.random();

	result = (max - min) * randomNumber + min;
	return Math.floor(result);
}

//Что бы цвета не повторялись
let duplicate = null;

//Создаём элемент прямоугольник
function createRectangle() {

	let divRectangle = document.createElement('div');
	document.querySelector('#rectangle');
	divRectangle.setAttribute('id', 'rectangle');
	document.body.append(divRectangle);

	console.log(divRectangle)

	let widthRectangle = 0;
	let heightRectangle = 0;

	//Создаём и проверяем прямоугольник
	while(widthRectangle === heightRectangle) {
		widthRectangle = random(50, 200);
		heightRectangle = random(50, 200);
	}

	let randomColorNumber = random(0, arrayColor.length);
	
	if (randomColorNumber === duplicate) {
		randomColorNumber = random(0, arrayColor.length);
	}

	duplicate = randomColorNumber;

	divRectangle.style.width = widthRectangle + 'px';
	divRectangle.style.height = heightRectangle + 'px';
	divRectangle.style.background = arrayColor[randomColorNumber];
	
	//Задаём отступ так как блоки слипаются
	divRectangle.style.marginBottom = '5px';
	
	//Наведении курсора мыши
	divRectangle.onmouseover = function() {
		console.log(`Ширина = ${this.style.width}, Высота = ${this.style.height}`);
	}

	//Клик по элементу
	divRectangle.onclick = function() {
		alert(`Цвет этого прямоугольника ${arrayNameColor[randomColorNumber]}`);
	}

}

for (let i = 0; i < 2; i++) {
	createRectangle();
}
