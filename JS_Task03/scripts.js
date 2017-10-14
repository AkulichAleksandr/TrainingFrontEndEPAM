function memorization() {
    var result = [];
    return function() {
        if (arguments.length === 0) return result;

        for (var i = 0; i < arguments.length; i++) {
            result.push(arguments[i]);
        }
    
    }
}

var storage = memorization();

storage(1,2);
storage('Hello');
storage({a: 1}, 'Some string');
console.log(storage());