alert('Загадайте число от 0 до 100');

let min = Number(0);
let max = Number(100); 

let mean = (max + min)/2;

for(let i = 0; i < 7; i++) {

	if (confirm(`Ваше число больше ${mean}`)) {
		min = mean;
	} else {
		max = mean;
	}

	mean = (max + min)/2;

	if (i > 5) {
		alert(`Ваше число ${Math.round(mean)}`);
		break;
	}
}