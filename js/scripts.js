var theWord;
function buttonMaker() {
	let words = fetchAllWords().toLowerCase().split(' ');
	theWord = getRandom(words);
	str = theWord.split('')
	let first = str.shift();
	let last = str.pop();
	let counter = 0;
	let buff = '';
	let allMixed;


	for (let i = 0; i < str.length; i++) {   // Create hidden letter places
		counter++;
		let p = `<input type="text" id="letter${counter}" maxlength="1" onkeyup="check(${counter})" name="${counter}" value="" style="font-size: 30px;" autocapitalize="none"/>`; // Create letter places  onkeyup
		buff += `${p} `
	}
	allMixed = `${first} ${buff} ${last}`
	document.getElementById("createButtons").innerHTML = allMixed;
	//console.log(allMixed);    //debugging


	// Input words list
	function fetchAllWords() {
		return 'заек Катерица Лисица Котка кон'// Катерица Лалугер Котка Невестулка Мишка Сръндак Козел Коза Подковонос';
	}

	// Randomize input words
	function getRandom(list) {
		return list[Math.floor((Math.random() * list.length))];
	}
}
var fail = 0;
function check(el) {
	//console.log(el);
	let index = document.getElementById("letter" + el).name;
	let char = document.getElementById("letter" + el).value;
	let maxFailTurns = theWord.length - 2;
	//console.log(char.charCodeAt());
	//console.log(fail);
	console.log(theWord.length);
	if (char.charCodeAt() >= 1072 && char.charCodeAt() <= 1103) {

		if (char == theWord[index]) {
			document.getElementById("checks").innerHTML = "ok";
		} else {
			document.getElementById("checks").innerHTML = "no";
			fail++
		}

		// IF word has 1 letter to guess
		if (maxFailTurns === 1) {
			if (char != theWord[index] && fail === 1) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/final3.png" alt=""/>`;
			}
		// IF word has 2 letters to guess
		} else if (maxFailTurns === 2) {
			if (char != theWord[index] && fail === 1) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/three.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 2) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/final3.png" alt=""/>`;
			}
		// IF word has 3 letters to guess
		} else if (maxFailTurns === 3) {
			if (char != theWord[index] && fail === 1) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/one.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 2) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/three.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 3) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/final3.png" alt=""/>`;
			}
		// IF word has 4 letters to guess
		} else if (maxFailTurns === 4) {
			if (char != theWord[index] && fail === 1) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/one.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 2) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/three.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 3) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/four2.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 4) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/final3.png" alt=""/>`;
			}
		// IF word has 5 and more letters to guess
		} else if(maxFailTurns > 4){
			if (char != theWord[index] && fail === 1) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/one.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 2) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/two.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 3) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/three.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 4) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/four2.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 5) {
				document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/final3.png" alt=""/>`;
			}
		}

	} else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
		alert("Използвай само букви на кирилица!")
	}
}









