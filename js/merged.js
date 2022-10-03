
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

    word = theWord.toLowerCase();
    str = word.split('')
    let first = str.shift();
    let last = str.pop();
    let counter = 0;
    let buff = '';
    let allMixed;

    for (let i = 0; i < str.length; i++) {   // Create hidden letter places
        counter++;
        let p = `<input class="" type="text" id="letter${counter}" maxlength="1" onkeyup="check()" name="${str[i]}" value=""/>`; // Create letter places name="${counter}" value=""/>`;
        buff += `${p} `
    }
    allMixed = `${first} ${buff} ${last}`
    document.getElementById("createButtons").innerHTML = allMixed;
    //console.log(allMixed);    //debugging


    // Input words list
    function allWords() {
        str = 'заек Катерица Лалугер Лисица Котка Невестулка Мишка Сръндак Козел Коза Подковонос';
    }
}

function check(el) {
    console.log(el);
    let index = document.getElementById("letter"+el).name;
    let char = document.getElementById("letter"+el).value;
    if(char === theWord[index]){
        document.getElementById("checks").innerHTML = "ok";
    }

}
