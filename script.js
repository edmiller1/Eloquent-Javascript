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