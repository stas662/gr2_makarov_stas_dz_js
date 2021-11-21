//Часы

$(document).ready(function() {

	function createBlock(nameParent) {
		nameBlock = document.createElement('div');
		$(nameParent).append(nameBlock);
		return nameBlock;
	}

	function styleBlock(nameBlock, ...arrg) {
		for (let i = 0; i < arrg.length; i++) {
			nameBlock.style.cssText = arrg[i];
		}
	}

	let block = createBlock('body');
	styleBlock(block, [`
		display: flex;
		margin: auto;
		justify-content: center;
		padding: 50px;
		position: relative;
		width: 450px;
   		height: 450px;
   		border-radius: 50%;
   		border: 1px solid;
   	`]);

let variableWidth = 10;
let variableHeight = 90;

let variableWidth2 = 30;
let variableHeight2 = 17;
let j = 1;

   	for (let i = 1; i < 13; i++) {

   		if (i % 3 === 0) {
   			let number = createBlock(block);
   			number.innerText = i;
   			if (i % 6 === 0) {
		   		styleBlock(number, [`
			   		position: absolute;
			   		top: ${variableHeight - 2.5}%;
			   		left: 260px;
			   		font-size: 18px;
			   		padding: 5px;
			   	`]);
				
			   	variableHeight = 100 - variableHeight;
		   	} else {
	   			styleBlock(number, [`
			   		position: absolute;
			   		top: 260px;
			   		left: ${100 - variableWidth - 2}%;
			   		font-size: 18px;
			   		padding: 5px;
			   	`]);
				
			   	variableWidth = 100 - variableWidth;
		   	}
   		} else {
   			let circle = createBlock(block); 
   			let width = 'right';
   			let height = 'top';
   			
   			if (j > 2 ) {
   				width = 'right';
   				height = 'bottom';
   			} 

   			if (j > 4) {
   				height = 'bottom';
   				width= 'left';
   			}

   			if (j > 6) {
   				height = 'top';
   				width= 'left';
   			} 

   			if (j % 2 == 0) {
   				variableWidth2 = variableWidth2 - 13;
   				variableHeight2 = variableHeight2 + 13;
   			} else { 
   				if (j !== 1) {
   					variableWidth2 = variableWidth2 + 13;
   					variableHeight2 = variableHeight2 - 13;
   				}
   			}
			
   			styleBlock(circle, [`
		   		position: absolute;
		   		${width}: ${variableWidth2}%;
		   		${height}: ${variableHeight2}%;
		   		width: 20px;
		   		height: 20px;
		   		border-radius: 50%;
		   		border: 1px solid;
		   	`]);
		   	j++;
   		}

   	}

	let blockSecond = createBlock(block);
	let blockMinutes = createBlock(block);
	let blockHour = createBlock(block);

	setInterval(() => {
		let dateNow = new Date()

		let second = dateNow.getSeconds();
		let minutes = dateNow.getMinutes();
		let hour = dateNow.getHours();

		styleBlock(blockSecond, [`
			display: flex;
			position: absolute;
			align-items: center;
			border-radius: 50% 50% 0 0;
			top: 142px;
			margin-right: 5px;

			background: #333333;
			transform-origin: 100% 100%;	
			width: 5px;
			height: 150px;
			transform: rotateZ(${second * 6}deg);

		`]);

		styleBlock(blockMinutes, [`
			display: flex;
			position: absolute;
			top: 173px;

			align-items: center;
			border-radius: 50% 50% 0 0;
			width: 6px;
			height: 120px;
			background: #333333;
			transform-origin: 100% 100%;
			transform: rotateZ(${minutes * 6}deg);

		`]);

		styleBlock(blockHour, [`
			position: absolute;
			top: 215px;

			border-radius: 50% 50% 0 0;
			width: 8px;
			height: 80px;
			background: #333333;
			transform-origin: 100% 100%;
			transform: rotateZ(${hour * 30}deg);

		`]);
   	})
})
