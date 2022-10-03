
function buttonMaker() {
    let words = fetchAllWords().toLowerCase().split(' ');
    var theWord = getRandom(words);


    str = theWord.split('')
    let first = str.shift();
    let last = str.pop();
    let counter = 0;
    let buff = '';
    let allMixed;

    for (let i = 0; i < str.length; i++) {   // Create hidden letter places
        counter++;
        let p = `<input class="" type="text" id="letter${counter}" maxlength="1" onkeyup="check(${counter})" name="${counter}" value=""/>`; // Create letter places
        buff += `${p} `
    }
    allMixed = `${first} ${buff} ${last}`
    document.getElementById("createButtons").innerHTML = allMixed;
    //console.log(allMixed);    //debugging


    // Input words list
    function fetchAllWords() {
        return 'заек Катерица Лалугер Лисица Котка Невестулка Мишка Сръндак Козел Коза Подковонос';
    }

    // Randomize input words
    function getRandom(list) {             
        return list[Math.floor((Math.random() * list.length))];
    }
}

function check(el) {
    // console.log(el);
    let index = document.getElementById("letter"+el).name;
    let char = document.getElementById("letter"+el).value;
    if(char === theWord[index]){
        document.getElementById("checks").innerHTML = "ok";
    }

}
