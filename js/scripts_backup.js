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
        return 'заек Котка'// Катерица Лалугер Лисица Котка Невестулка Мишка Сръндак Козел Коза Подковонос';
    }

    // Randomize input words
    function getRandom(list) {             
        return list[Math.floor((Math.random() * list.length))];
    }
}
var fail = 0;
function check(el) {
    //console.log(el);
    let index = document.getElementById("letter"+el).name;
    let char = document.getElementById("letter"+el).value;
	let maxFailTurns = theWord.length - 3;
	//console.log(char.charCodeAt());
    //console.log(fail);
	console.log(theWord.length);
	if(char.charCodeAt() >= 1072 && char.charCodeAt() <= 1103 ){

		if(char == theWord[index]){
			document.getElementById("checks").innerHTML = "ok";
			fail = 0;
		} else {				
			document.getElementById("checks").innerHTML = "no";
			fail++
		}
		
		if(char != theWord[index] && fail === 1){
				if(theWord.length - 2 < 3){
					document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/two.png" alt=""/>`;
				} else {
					document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/one.png" alt=""/>`;
				}
					//TODO: case with length smoller than 5 ans so on...
			} else if (char !== theWord[index] && fail === 2){
					document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/two.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 3){
					document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/final.png" alt=""/>`;
			}
	/*	if(str <= 2){
			if (char !== theWord[index] && fail === 1){
					document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/two.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 2){
					document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/final.png" alt=""/>`;
			}
			
		}else if(str > 2){
			if(char != theWord[index] && fail === 1){		
					document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/one.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 2){
					document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/two.png" alt=""/>`;
			} else if (char !== theWord[index] && fail === 3){
					document.getElementById("yFail").innerHTML = `<img class="fullImage" src="img/final.png" alt=""/>`;
			}
		} */
	} else if(char.charCodeAt() >= 97 && char.charCodeAt() <= 122 ){
		//document.getElementById("checks").innerHTML = "Използвай само букви на кирилица!";
		alert("Използвай само букви на кирилица!")
	}
}
