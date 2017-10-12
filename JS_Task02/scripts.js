factorial.onclick = function() {
    var num = +prompt('Enter the number', 10);
    num = (num >= 0)? num: 0;
function factorial(n) {
    var res = 1;
    for (var i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
console.log(num + '! = ' + factorial(num));
}

fibonacciSequence.onclick = function() {
    var num = +prompt('Enter the number more than 1', 15);
    num = (num >= 2)? num: 2;
function fibonacciSequence(n) {
    var arr = [1, 1], a = arr[0], b = arr[1], res = 0;
    for (var i = 2; i < n; i++) {
        res = a + b;
        a = b;
        b = res;
        arr.push(res);
    }
    return arr;
}
console.log('First ' + num + ' numbers of Fibonacci sequence: ' +  fibonacciSequence(num));
}

primeNum.onclick = function() {
    var num = +prompt('Enter the number', 25);
    num = (num > 1)? num: 2;
function primeNum(n) {
    var arr = [];
    again:
    for (var i = 2; i <= n; i++) {
      for (var j = 2; j < i; j++) {
        if (i % j == 0) continue again;
      }
      arr.push(i);
    }
    return arr;
}
console.log('The sequence of prime numbers up to ' + num + ': ' + primeNum(num));
}