window.onload = function () {
    var elements = document.querySelectorAll('.main > p');
    var InitialFontSize = 48;
    
    function createDecreasingFont() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = (InitialFontSize - 4*i) + "px";
    }
    }
    createDecreasingFont();

    incr.onclick = function() {
        InitialFontSize +=2;
        createDecreasingFont();
    }

    decr.onclick = function() {
        InitialFontSize -=2;
        createDecreasingFont();
    }
}