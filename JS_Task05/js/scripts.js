// clear localStorage after refresh page
if (performance.navigation.type == 1) { 
    localStorage.clear(); 
}

// save date/time & select
(function () {
    var items = [];
    items[0] = document.getElementsByClassName('ak-widget__dateFrom')[0];
    items[1] = document.getElementsByClassName('ak-widget__timeFrom')[0];
    items[2] = document.getElementsByClassName('ak-widget__dateTo')[0];
    items[3] = document.getElementsByClassName('ak-widget__timeTo')[0];
    items[4] = document.getElementsByClassName("ak-select-gift__main")[0];
    items[5] = document.getElementsByClassName("ak-select-gift__second")[0];

    for (i = 0; i < items.length; i++) {
        (function (element) {
            var name = element.getAttribute('name');
            element.value = localStorage.getItem(name) || element.value;
            element.oninput = function () {
                localStorage.setItem(name, element.value);
            };
        })(items[i]);
    }
})();

// save radiobutton
(function () {
    var radioElem = document.getElementsByClassName('ak-secect-companion__item');
    for (var i = 0; i < radioElem.length; i++) {
        radioElem[i].onclick = function () {
            localStorage.setItem('radioval', this.value);
        }
    }
    if (localStorage.getItem('radioval')) {
        var radioVal = localStorage.getItem('radioval');
        document.querySelector('input[class="ak-secect-companion__item"][value="' + radioVal + '"]').setAttribute('checked', 'checked');
    }
})();