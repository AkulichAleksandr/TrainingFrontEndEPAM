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
console.log(~~num + '! = ' + factorial(num));
}

fibonacciSequence.onclick = function() {
    var num = +prompt('Enter the number more than 1', 15);
    num = (num >= 1)? num: 1;
function fibonacciSequence(n) {
    var arr = [0, 1], currentNum = arr[0], nextNum = arr[1], res = 0;
    for (var i = 2; i < n; i++) {
        res = currentNum + nextNum;
        currentNum = nextNum;
        nextNum = res;
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
    for (var i = 2; i <= n; i++) {
      for (var j = 2; j < i; j++) {
        if (i % j === 0) break;
      }
      if (i === j) arr.push(i);
    }
    return arr;
}
console.log('The sequence of prime numbers up to ' + num + ': ' + primeNum(num));
}