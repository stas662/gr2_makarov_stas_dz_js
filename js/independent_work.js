document.body.style.display = 'flex';

function createSquare() {
	let divSquare = document.createElement('div');
	document.querySelector('#square');
	divSquare.setAttribute('id', 'square');

	divSquare.style.minWidth = '70px';
	divSquare.style.minHeight = '70px';
	divSquare.style.background = '#87CEEB';
	divSquare.style.marginRight = '5px'

	document.body.append(divSquare);

}

function changeСolor() {
	let id = document.querySelectorAll('#square');
	for (let i = 0; i < id.length; i++) {
		id[i].style.background = '#800080';
		id[i].style.minWidth = '10px'; 
		id[i].style.minHeight = '10px';
	}
}

function getNumber() {
	let id = document.querySelectorAll('#square');
	for (let i = 0; i < id.length; i++) {
		id[i].innerText = i + 1;
		id[i].style.fontSize = '5px';
	}
}

function changeElementColor() {
	let id = document.querySelectorAll('#square');
	for (let i = 0; i < id.length; i++) {
		id[i].style.background = '#FFFF00';
		
		if (((i + 1) % 3 === 0) && (i !== 0)) {
			id[i].style.background = '#FF0000';
		}
		if (((i + 1) % 15 === 0) && (i !== 0)) {
			id[i].style.background = 'transparent';
			id[i].style.maxWidth = 0;
		    id[i].style.maxHeight = 0;
		    id[i].style.minWidth = 0;
			id[i].style.minHeight = 0;
		    id[i].style.borderLeft = '5px solid transparent';
		    id[i].style.borderRight = '5px solid transparent';
		    id[i].style.borderBottom = '10px solid #78866b';
		}
	}
}

function clearElements() {
	let id = document.querySelectorAll('#square');
	for (let i = 0; i <= id.length; i++) {
		if (id[i].style.background == 'rgb(255, 0, 0)') {
			id[i].remove();
		}
	}
	
}

const MS_SECOND = 1000;

setTimeout( function() {
	for (let i = 0; i < number; i++) {
		createSquare();
	}

}, MS_SECOND * 2);

setTimeout(changeСolor, MS_SECOND * 4);
setTimeout(getNumber, MS_SECOND * 6);
setTimeout(changeElementColor, MS_SECOND * 8);
setTimeout(clearElements, MS_SECOND * 10);
