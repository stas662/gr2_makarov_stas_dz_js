$(document).ready(async function(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then((response) => response.json())
	.then((json) => {

		getNewBlock(json)



	}).then((newBlock)  => {
		for (let i = 0; i < array.length; i++) {
			$('body').append(array[i]);
		}
	})
})

let array = [];

async function getNewBlock(json) {

	for (let i = 0; i < json.length; i++) {
		let newBlock = document.createElement('div');
		newBlock.id = 'block';
		array.push(newBlock);

		$(newBlock).css({
			marginBottom: '5px',
			display: 'flex',
			maxWidth: '250px',
			
			flexDirection: 'column'
		})
		
		getListOfObjects(json[i], i, newBlock)

		setTimeout(console.log('sdds'),2000)

		let newBlockImg = document.createElement('img');
		$(newBlockImg).attr({
			src: 'https://memepedia.ru/wp-content/uploads/2019/12/screenshot_22-1-768x575.png',
			alt: 'cat'
		});

		$(newBlock).prepend($(newBlockImg))

		let newBlockButtonAlert = document.createElement('button');
		$(newBlockButtonAlert).attr({
			name: 'alert'
		});
		$(newBlockButtonAlert).text('Вывести alert')

		$(newBlock).append($(newBlockButtonAlert))

		$(newBlockButtonAlert).click(function() {
			alert(arrayKey)
		})

		console.log(arrayKey)

		let newBlockButtonRemove = document.createElement('button');
		$(newBlockButtonRemove).attr({
			name: 'alert'
		});
		$(newBlockButtonRemove).text('Удалить блок')

		$(newBlock).append($(newBlockButtonRemove))

		$(newBlockButtonRemove).click(function() {
			var parent = newBlockButtonRemove.parentNode;
			var grand_father = parent.parentNode;
			grand_father.removeChild(parent);
		})
	}
}

let arrayKey = []

function getListOfObjects(json, i, newFilledBlock) {
	for (const [key, value] of Object.entries(json)) {
		if (typeof(value) == 'object') {
			getListOfObjects(value, i, newFilledBlock);
		} else {
			//console.log(`${key}: ${value}`)
			$(newFilledBlock).append(`${key}: ${value} </br>`)
			if (key == 'city') {
				arrayKey.push(key, value)
			}
	  	}
	}
}