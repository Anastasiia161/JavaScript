let min = 0;
let max = 100;

alert("Загадайте число от 1 до 100:");
let a=0;
while (a = 3) {
    let n = Math.floor((max + min) / 2); 
	a = +prompt(
		"Подтвердите действие:\n" +
			"Если ваше число > " +n  +" введите 1\n" + 
			"Если ваше число < " +n  +" введите 2\n" +
			"Если ваше число = " +n  +" введите 3\n"
	);
	switch (a) {
		case 1:
            min = n;
			break;
		case 2:
            max = n;
			break;
		case 3:
			alert("Число угадано выход из изры");
			break;
	}
}

