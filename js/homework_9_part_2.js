let arrayColor = ['#808080', '#000000', '#008000', '#0000FF', '#FF0000', '#FFFF00', '#00FFFF', '#ADFF2F', '#FFA500'];
let arrayNameColor = ['Серый', 'Чёрный', 'Зелёный', 'Синий', 'Красный', 'Жёлтый', 'Бирюзовый', 'Жёлто-зелёный', 'Оранжевый'];

//Создаём элемент прямоугольник 
function createRectangle(idRectangle, widthRectangle, heightRectangle, colorNumber) {

	function checkType(numberItem) {
		if (typeof(numberItem) !== 'number') {
			return true;
		}
		return false;
	}

	if ((typeof(idRectangle) !== 'string') && checkType(widthRectangle) && checkType(heightRectangle) && checkType(colorNumber)) {
		return null;
	}

	$('body').append(`<div id=${idRectangle}></div>`); 

	$('div#' + idRectangle).css({
		width: widthRectangle + 'px',
		height: heightRectangle + 'px',
		background: arrayColor[colorNumber],
		marginBottom: '5px',
	});

	//Наведении курсора мыши
	$('div#' + idRectangle).mouseover(function() {
		console.log(`Ширина = ${this.style.width}, Высота = ${this.style.height}`);
	});

	//Клик по элементу
	$('div#' + idRectangle).click(function() {
		alert(`Цвет этого прямоугольника ${arrayNameColor[colorNumber]}`);
	});
}

createRectangle('one', 150, 50, 4);
createRectangle('two', 75, 200, 6);

