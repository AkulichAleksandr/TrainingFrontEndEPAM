var renderer = new Renderer();
var datepicker = new DateCalculation();
datepicker.getMonthAndYear();
datepicker.getArrayOfDate();

var container = renderer.create(datepicker, {
    tag: 'div',
    classes: ['ak-datepicker']
}
);
renderer.render(container);


var headContainer = renderer.create(datepicker, {
    tag: 'div',
    classes: ['ak-datepicker__head']
}
);
renderer.render(headContainer, container);


var monthAndYear = renderer.create(datepicker, {
    tag: 'div',
    classes: ['ak-datepicker__month'],
    property: 'monthAndYear'
}
);
renderer.render(monthAndYear, headContainer);


var bodyContainer = renderer.create(datepicker, {
    tag: 'div',
    classes: ['ak-datepicker__body']
}
);
renderer.render(bodyContainer, container);


var nameOfWeekDays = renderer.create(datepicker, {
    tag: 'div',
    classes: ['ak-datepicker__title'],
    property: 'nameOfDays',
    arrayOfElements: true
}
);
renderer.render(nameOfWeekDays, bodyContainer);


var datesOfCurrentMonth = renderer.create(datepicker, {
    tag: 'div',
    classes: ['ak-datepicker__days-of-month', 'ak-datepicker__current-day'],
    property: 'arrayOfDate',
    arrayOfElements: true
}
);
renderer.render(datesOfCurrentMonth, bodyContainer);


var leftButton = renderer.create(datepicker, {
    tag: 'div',
    classes: ['ak-datepicker__left-button'],
    content: '&#171;',
    event: ['click', function () {
        document.getElementsByClassName('ak-datepicker')[0].removeChild(document.getElementsByClassName('ak-datepicker__body')[0]);
        document.getElementsByClassName('ak-datepicker__head')[0].removeChild(document.getElementsByClassName('ak-datepicker__month')[0]);
        datepicker.getPreviousMonth();
        datepicker.getMonthAndYear();

        var monthAndYear = renderer.create(datepicker, {
            tag: 'div',
            classes: ['ak-datepicker__month'],
            property: 'monthAndYear'
        }
        );
        renderer.render(monthAndYear, headContainer);


        var bodyContainer = renderer.create(datepicker, {
            tag: 'div',
            classes: ['ak-datepicker__body']
        }
        );
        renderer.render(bodyContainer, container);


        var nameOfWeekDays = renderer.create(datepicker, {
            tag: 'div',
            classes: ['ak-datepicker__title'],
            property: 'nameOfDays',
            arrayOfElements: true
        }
        );
        renderer.render(nameOfWeekDays, bodyContainer);


        var datesOfCurrentMonth = renderer.create(datepicker, {
            tag: 'div',
            classes: ['ak-datepicker__days-of-month', 'ak-datepicker__current-day'],
            property: 'arrayOfDate',
            arrayOfElements: true
        }
        );
        renderer.render(datesOfCurrentMonth, bodyContainer);

    }]
}
);
renderer.render(leftButton, headContainer);


var rightButton = renderer.create(datepicker, {
    tag: 'div',
    classes: ['ak-datepicker__right-button'],
    content: '&#187;',
    event: ['click', function () {
        document.getElementsByClassName('ak-datepicker')[0].removeChild(document.getElementsByClassName('ak-datepicker__body')[0]);
        document.getElementsByClassName('ak-datepicker__head')[0].removeChild(document.getElementsByClassName('ak-datepicker__month')[0]);
        datepicker.getNextMonth();
        datepicker.getMonthAndYear();

        var monthAndYear = renderer.create(datepicker, {
            tag: 'div',
            classes: ['ak-datepicker__month'],
            property: 'monthAndYear'
        }
        );
        renderer.render(monthAndYear, headContainer);


        var bodyContainer = renderer.create(datepicker, {
            tag: 'div',
            classes: ['ak-datepicker__body']
        }
        );
        renderer.render(bodyContainer, container);


        var nameOfWeekDays = renderer.create(datepicker, {
            tag: 'div',
            classes: ['ak-datepicker__title'],
            property: 'nameOfDays',
            arrayOfElements: true
        }
        );
        renderer.render(nameOfWeekDays, bodyContainer);


        var datesOfCurrentMonth = renderer.create(datepicker, {
            tag: 'div',
            classes: ['ak-datepicker__days-of-month', 'ak-datepicker__current-day'],
            property: 'arrayOfDate',
            arrayOfElements: true
        }
        );
        renderer.render(datesOfCurrentMonth, bodyContainer);
    }]
}
);
renderer.render(rightButton, headContainer);