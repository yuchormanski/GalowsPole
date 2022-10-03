var theWord;
function buttonMaker() {
	let words = fetchAllWords().toLowerCase().split(' ');
	theWord = getRandom(words);
	str = theWord.split('')
	first = str.shift();
	last = str.pop();
	counter = 0;
	let buff = '';
	let allMixed;
	wordCheck = str.join('')
	console.log(wordCheck);


	for (let i = 0; i < str.length; i++) {   // Create hidden letter places
		counter++;
		let p = `<input type="text" id="letter${counter}" maxlength="1" onkeyup="check(${counter})" name="${counter}" value="" style="font-size: 30px;" autocapitalize="none"/>`; // Create letter places  onkeyup
		buff += `${p} `
	}
	allMixed = `${first} ${buff} ${last}`
	document.getElementById("createButtons").innerHTML = allMixed;

	// Input words list
	function fetchAllWords() {
		return 'заек Катерица Лисица Котка кон Лалугер Невестулка Мишка Сръндак Козел Коза Подковонос лъв Вълк леопард Хиена мечка Гепард панда ';
	}

	// Randomize input words
	function getRandom(list) {
		return list[Math.floor((Math.random() * list.length))];
	}

}
var fail = 0;
forCheck = [];

function check(el) {

	let index = document.getElementById("letter" + el).name;
	let char = document.getElementById("letter" + el).value;
	let maxFailTurns = theWord.length - 2;
	let userCheck = '';

	// IF char is Cyrillic 
	if (char.charCodeAt() >= 1072 && char.charCodeAt() <= 1103) {

		// CHAR success debugging
		// if (char == theWord[index]) {
		// 	document.getElementById("checks").innerHTML = "ok";
		// } else {
		// 	document.getElementById("checks").innerHTML = "no";
		// }
		//console.log(el);
		//console.log(char.charCodeAt());
		//console.log(fail);
		//console.log(theWord.length);

		if (char !== theWord[index]) {
			fail++
		}

		// IF word has 1 letter to guess
		if (maxFailTurns === 1) {
			if (char != theWord[index] && fail === 1) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/final3.png" alt=""/>`;
				document.getElementById("response").classList = "galowsOn";
			} else if (char === theWord[index]) {
				forCheck.splice(index, 0, char);
			}
			// IF word has 2 letters to guess
		} else if (maxFailTurns === 2) {
			if (char !== theWord[index] && fail === 1) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/three.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 2) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/final3.png" alt=""/>`;
				document.getElementById("response").classList = "galowsOn";
			} else if (char === theWord[index]) {
				forCheck.splice(index, 0, char);
			}
			// IF word has 3 letters to guess
		} else if (maxFailTurns === 3) {
			if (char !== theWord[index] && fail === 1) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/one.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 2) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/three.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 3) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/final3.png" alt=""/>`;
				document.getElementById("response").classList = "galowsOn";
			} else if (char === theWord[index]) {
				forCheck.splice(index, 0, char);
			}
			// IF word has 4 letters to guess
		} else if (maxFailTurns === 4) {
			if (char !== theWord[index] && fail === 1) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/one.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 2) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/three.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 3) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/four2.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 4) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/final3.png" alt=""/>`;
				document.getElementById("response").classList = "galowsOn";
			} else if (char === theWord[index]) {
				forCheck.splice(index, 0, char);
			}
			// IF word has 5 and more letters to guess
		} else if (maxFailTurns > 4) {
			if (char !== theWord[index] && fail === 1) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/one.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 2) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/two.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 3) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/three.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 4) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/four2.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 5) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/final3.png" alt=""/>`;
				document.getElementById("response").classList = "galowsOn";
			} else if (char === theWord[index]) {
				forCheck.splice(index, 0, char);
			}
		}


		// IF char is Latin letter
	} else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
		alert("Използвай само букви на кирилица!")
	}
	userCheck = forCheck.join('');
	console.log(userCheck);

	if (wordCheck === userCheck) {
		document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/winner.png" alt=""/>`;
		//console.log('OK');
	}
}









