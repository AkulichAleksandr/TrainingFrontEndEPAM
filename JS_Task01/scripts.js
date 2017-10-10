var expr = [
    ["'1' + 2 + 0", '1' + 2 + 0, "2 -> '2'; 0 -> '0'; '1' + '2' + '0' = '120'"],
    ["'1' - 1 + 2", '1' - 1 + 2, "'1' -> 1; 1 - 1 + 2 = 2"],
    ["true + false", true + false, "true -> 1; false -> 0; 1 + 0 = 1"],
    ["10 / '5'", 10 / '5', "'5' -> 5; 10 / 5 = 2"],
    ["'2' * '3'", '2' * '3', "'2' -> 2; '3' -> 3; 2 * 3 = 6"],
    ["4 + 5 + 'px'", 4 + 5 + 'px', "4 + 5 = 9; 9 -> '9'; '9' + 'px' = '9px'"],
    ["'$' + 4 + 5", '$' + 4 + 5, "4 -> '4'; 5 -> '5'; '$' + '4' +'5' = '$45'"],
    ["'42' - 2", '42' - 2, "'42' -> 42; 42 - 2 = 40"],
    ["'4px' - 2", '4px' - 2, "'4px' -> NaN; NaN - 2 = NaN"],
    ["7 / 0", 7 / 0, "Mathematical expression; 7 / 0 = Infinity"],
    ["'  -9\\n' + 5", '  -9\n' + 5, "The second part is transformed to a string ('5') -> string concatenation"],
    ["'  -9\\n' - 5", '  -9\n' - 5, "The first part is transformed to a number (-9) -> adding of numbers"],
    ["5 && 2", 5 && 2, "The operator && calculates the operands from left to right to the first 'false' and returns it, \nand if all of them are 'true' it returns the last value."],
    ["2 && 5", 2 && 5, "The operator && calculates the operands from left to right to the first 'false' and returns it, \nand if all of them are 'true' it returns the last value."],
    ["5 || 0", 5 || 0, "The operator || calculates the operands from left to right to the first 'true' and returns it, \nand if all of them are 'false' it returns the last value."],
    ["0 || 5", 0 || 5, "The operator || calculates the operands from left to right to the first 'true' and returns it, \nand if all of them are 'false' it returns the last value."],
    ["null + 1", null + 1, "null -> 0; 0 + 1 = 1"],
    ["undefined + 1", undefined + 1, "undefined -> NaN; NaN + 1 = NaN"],
    ["null == '\\n0\\n'", null == '\n0\n', "If operator == is used with 'null' then data type conversion does not occur \naccording to ECMAScript. The only variant is 'null == undefined'."],
    ["+null == +'\\n0\\n'", +null == +'\n0\n', "+null -> 0; '\\n0\\n' -> 0 (blank line); 0 == 0 -> true"]
];

for (var i = 0; i < expr.length; i++) {
    console.log(i + 1 + ')   ' + expr[i].join('\n'));
    console.log('------------------------------');
}

