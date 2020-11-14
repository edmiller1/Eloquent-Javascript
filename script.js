/* LOOPING A TRIANGLE */
var loopingATriangle = document.getElementById('LoopingTriangle');

const makeTriangle = () => {
    var hash = ''
    for (var i = 0; i < 7; i++) {
        for (var j = 0; j <= i; j++) {
            hash += '#';
        }
        hash += "<br/>";
    }
    loopingATriangle.innerHTML = hash;
}

const resetTriangle = () => {
    loopingATriangle.innerHTML = '';
}

/* FIZZ BUZZ */
var fizzBuzz = document.getElementById('fizzBuzz');

const makeFizzBuzz = () => {
    for(var i = 1; i < 12; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            fizzBuzz.innerHTML += 'FizzBuzz' + '<br/>';
        }
        else if(i % 5 === 0) {
                fizzBuzz.innerHTML += 'Buzz' + '<br/>';
        }
        else if(i % 3 === 0) {
                fizzBuzz.innerHTML += 'Fizz' + '<br/>';
        }
        else {
            fizzBuzz.innerHTML += i + '<br/>';
        }
    }
}

const resetFizzBuzz = () => {
    fizzBuzz.innerHTML = '';
}

/* CHESSBOARD */
var chessBoard = document.getElementById('chessBoard');

const makeChessBoard = () => {
    for(var i = 0; i < 8; i++) {
        for(var j = 0; j < 8; j++) {
            if((j + i) % 2 === 0) {
                chessBoard.innerHTML += ' &nbsp';
            }
            else {
                chessBoard.innerHTML += '#';
            }
        }
        chessBoard.innerHTML += '<br/>';
    }
}

const resetChessBoard = () => {
    chessBoard.innerHTML = '';
}

/* MINIMUM */
var minimum = document.getElementById('minimum');

const min = (a, b) => {
    var minimumNumber = minimum.innerHTML = Math.min(a, b);
    return minimum.innerHTML = `<span class="flex justify-center">${minimumNumber}</span>`;
}

const resetMinimum = () => {
    minimum.innerHTML = `<span class="flex justify-center">Find the minimum: 20 or 34</span>`;
}

/* RECURSION */
var recursion = document.getElementById('recursion');

const isEven = (num) => {
    if(num < 0) {
        recursion.innerHTML = `<span class="flex justify-center">${Math.abs(num)}</span>`
    }
    else if(num % 2 === 0) {
        recursion.innerHTML = `<span class="flex justify-center">Even</span>`;
    }
    else if(num % 2 === 1) {
        recursion.innerHTML = `<span class="flex justify-center">Odd</span>`;
    }
    else {
        recursion.innerHTML = isEven(num - 2);
    }
}

const resetRecursion = () => {
    recursion.innerHTML = '';
}

/* BEAN COUNTING */

var bean = document.getElementById('bean');

const countBs = (word) => {
    var count = 0;
    var newWord = word.toUpperCase();
    for(var i = 0; i < newWord.length ; i++) {
        if(newWord[i] === 'B') {
            count++;
        }
    }
    return bean.innerHTML = `<span class="flex justify-center">Word - ${newWord} <br/> B\'s - ${count}</span>`
    //return bean.innerHTML = 'Word - ' + newWord + '<br/>' + 'B\'s - ' + count;
}

const resetBeanCounting = () => {
    bean.innerHTML = '';
}


/* COUNT CHARS */
var character = document.getElementById('character');

const countChar = (word, char) => {
    var count = 0;
    var newWord = word.toUpperCase();
    var newChar = char.toUpperCase();
    for(var i = 0; i < newWord.length; i++) {
        if(newWord[i] === newChar){
            count++;
        }
    }
    return character.innerHTML = `<span class="flex justify-center">Word - ${newWord} <br/> ${newChar}'\s - ${count}</span>`
    //return character.innerHTML = 'Word - ' + newWord + '<br/>' + newChar + '\'s - ' + count;
}

const resetCountChar = () => {
    character.innerHTML = '';
}

/* Helpful?? */
var journal = [
    {"events":["carrot","exercise","weekend"],"squirrel":false},
    {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
]


function Tablefor(event, journal) {
    let table = [0,0,0,0];
    for(var i = 0; i < journal.length; i++) {
        var entry = journal[i], index = 0;
        if(entry.events.includes(event)) {
            index += 1;
        }
        if(entry.squirrel === true) {
            index += 2;
        }
        table[index] +=1;
    }
    return table;
}

console.log(Tablefor('brushed teeth', journal));


/* RANGE */
var range = document.getElementById('range');

const findRange = (start, end) => {
    let array = [];
    for(let i = start; i <= end; i++) {
        array.push(i);
    }
    return range.innerHTML = `<span class="flex justify-center"/>${array}</span>`;
}

const resetFindRange = () => {
    range.innerHTML = `<span class="flex justify-center">Get the range between 1 and 10</span>`;
}

/* SUM */
var sum = document.getElementById('sum');

const findSum = (array) => {
    var total = 0;
    for(var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return sum.innerHTML = `<span class="flex justify-center">Total: ${total}</span>`;
}

const resetSum = () => {
    sum.innerHTML = `<span class="flex justify-center text-center">Find the sum of theses numbers: 1,2,3,4,5,6,7,8,9,10</span>`;
}

//console.log(findSum(findRange(1, 10)));

/* RANGE WITH STEP */
var rangeStep = document.getElementById('rangeStep');

const findRangeWithStep = (start, end, step = start < end ? 1 : -1) => {
    var array = [];
    if(step > 0) {
    for(var i = start; i <= end; i += step) {
            array.push(i);
        }
    }
    else {
        for(var i = start; i >= end; i += step) {
            array.push(i);
        }
    }
        rangeStep.innerHTML = `<span class="flex justify-center">${array}</span>`
}

const resetRangeWithStep = () => {
    rangeStep.innerHTML = ''
}

//console.log(findRangeWithStep(0, 100, 2));

/* REVERSE ARRAY */
var revArray = document.getElementById('revArray');
var numbers = [1,2,3,4,5];
const reverseArray = (array) => {
    var newArray =[];
    for(var i = 0; i < array.length + newArray.length; i++) {
        newArray.push(array.pop());
    }
        revArray.innerHTML = `<span class="flex justify-center text-center">Reversed:<br/>${newArray}</span>`;

}

const resetReverseArray = () => {
    revArray.innerHTML = `<span class="flex justify-center text-center">Reverse these Numbers:<br/> 1,2,3,4,5</span>`
}


/* REVERS ARRAY IN PLACE */
var revArrayInPlace = document.getElementById('revArrayInPlace');
var numbers = [1,2,3,4,5];
const reverseArrayInPlace = (array) => {
    for(var i = 0; i < Math.floor(array.length / 2); i++) {
        var index = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 -i] = index;
    }
    return revArrayInPlace.innerHTML =  `<span class="flex justify-center text-center">Reversed:<br/>${array}</span>`;
}

function resetReverseArrayInPlace() {
    revArrayInPlace.innerHTML = `<span class="flex justify-center text-center">Reverse these Numbers:<br/> 1,2,3,4,5</span>`;
}

//console.log(reverseArrayInPlace(numbers));


/* ARRAY TO LIST */
var arrayToListID = document.getElementById('arrayToListID');

const arrayToList = (array) => {
    let list = {};
    for(var i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list}
    }
    //return list;
    return arrayToListID.innerHTML = JSON.stringify(list) + '<br/>';
}

const resetArrayToList = () => {
    arrayToListID.innerHTML =  `<span class="flex justify-center">Make this array into a list: [1, 2, 3]</span>`;
}
//console.log(arrayToList([1,2,3]));

/* LIST TO ARRAY */
var listToArrayID = document.getElementById('listToArrayID');

const listToArray = (list) => {
    let array = [];
    for(let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

//console.log(listToArray(arrayToList([10, 20, 30])));


/* PREPEND */

const prepend = (value, list) => {
    list = {value, rest: list};
    return list;
}

console.log(prepend(10, prepend(20, null)));

/* NTH */

const nth = (list, node) => {
    if(!list) return undefined;
    for(node = list; node; node = node.rest) {
        return node.value;
    }
}

//console.log(nth(arrayToList(1,2,3)));

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 20, 20, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  /*  FILTER */

  //get Companies that are retail
  const retailCompanies = companies.filter(company => company.category === 'Retail');

  //console.log(retailCompanies);

  //Get companies that started in the 80's
  const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);

  //console.log(eightiesCompanies);

  //Get the companies that lasted 10 years or more
  const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

  //console.log(lastedTenYears);

/*  MAP */


let sortAges = ages.sort((a, b) => a - b);

sortAges = sortAges.filter((item, index) => sortAges.indexOf(item) === index);

console.log(sortAges);

//console.log(sortAges);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

console.log(totalYears);

let arr = [1,2,3,4,5];

console.log(Math.max.apply(Math, arr));

function getSecondLargest(nums) {
    // Complete the function
    let newNums = nums.sort((a,b) => a - b);
    newNums = newNums.filter((item, index) => newNums.indexOf(item) === index);
    
    return newNums[newNums.length - 2];
}

console.log(getSecondLargest(ages));

function reverseString(s) {
    let reversed = '';
    for(let i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }
    return reversed;
}

console.log(reverseString('Benny'));

let array = [1,1];
let total = 0;

for(let i = 0; i < array.length; i++) {
    total += array[i];
}

console.log(total);
