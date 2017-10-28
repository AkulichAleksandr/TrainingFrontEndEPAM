function Renderer() {

}

Renderer.prototype.create = function (objectOfData, objectOfSettings) {
    this.element = document.createElement(objectOfSettings.tag);
    if (objectOfSettings.classes) {
        for (var i = 0; i < objectOfSettings.classes.length; i++) {
            this.element.classList.add(objectOfSettings.classes[i]);
        }
    }
    if (objectOfSettings.content) {
        this.element.innerHTML = objectOfSettings.content;
    }
    if (objectOfSettings.property) {
        this.element.innerHTML = objectOfData[objectOfSettings.property];
    }
    if (objectOfSettings.arrayOfElements) {
        this.element = [];
        for (var i = 0; i < objectOfData[objectOfSettings.property].length; i++) {
            this.element.push(document.createElement(objectOfSettings.tag));
            this.element[i].className = objectOfSettings.classes[0];
            this.element[i].innerHTML = objectOfData[objectOfSettings.property][i];
            if (Array.isArray(objectOfData[objectOfSettings.property][i])) {
                this.element[i].classList.add(objectOfSettings.classes[1]);
            }
        }
    }

    if (objectOfSettings.event) {
        this.element.addEventListener(objectOfSettings.event[0], objectOfSettings.event[1])
    }

    return this.element;
}

Renderer.prototype.render = function (elem, parentElem) {
    if (Array.isArray(elem)) {
        this.currentElem = document.querySelector('.' + parentElem.className);
        for (var i = 0; i < elem.length; i++) {
            this.currentElem.appendChild(elem[i]);
        };
    } else if (!(Array.isArray(elem)) && (parentElem !== undefined)) {
        this.currentElem = document.querySelector('.' + parentElem.className);
        this.currentElem.appendChild(elem);
    } else {
        document.body.insertBefore(elem, document.body.children[0]);
    }
}