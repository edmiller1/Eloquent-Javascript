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

for(var i = 1; i < 20; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i + ' FizzBuzz');
    }
    else if(i % 5 === 0) {
            console.log(i +' Buzz')
    }
    else if(i % 3 === 0) {
            console.log(i +' Fizz');
    }
    else {
        console.log(i);
    }
} 
/* FIZZ BUZZ */
var fizzBuzz = document.getElementById('fizzBuzz');

const FizzBuzz = () => {
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
