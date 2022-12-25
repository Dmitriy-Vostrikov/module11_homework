
var numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 18],
    oddNumb = numb.reduce(function (a, b) { return a + b % 2; }, 0), 
    evenNumb = numb.length - oddNumb; 

console.log('Количество нечетных чисел', oddNumb);
console.log('Количество четных чисел', evenNumb);