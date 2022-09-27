
function buttonMaker() {
    var str = '';
    let theWord = '';
    get_random()

    function get_random() {             // Randomize input words
        allWords()
        let list = str.split(' ');
        theWord = list[Math.floor((Math.random() * list.length))];
        return theWord;
        //console.log(theWord);
    }

    let word = theWord.toLowerCase();
    str = word.split('')
    let first = str.shift();
    let last = str.pop();
    let counter = 0;
    // let p = `<input class="" type="text" id="word" maxlength="1" onChange="" value="${counter}" />`; // Create letter places
    let buff = '';
    let allMixed;

    for (let i = 0; i < str.length; i++) {   // Create hidden letter places
        counter++;
        let p = `<input class="" type="text" id="word" maxlength="1" onChange="check()" value="${counter}" />`; // Create letter places
        buff += `${p} `
    }
    allMixed = `${first} ${buff} ${last}`
    //document.getElementById("createButtons").innerHTML = allMixed;
    console.log(allMixed);    //debugging


    // Input words list
    function allWords() {
        str = 'заек Катерица Лалугер Лисица Котка Невестулка Мишка Сръндак Козел Коза Подковонос';
    }
}
buttonMaker() 
