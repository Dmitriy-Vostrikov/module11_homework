
function getExample(n) {
    if (!Number.isInteger(n) || n < 2 || n > 1000) return "данные неверны";

    let a = Math.sqrt(n);
    for (let i = 2; i <= a; i++)
        if (n % i === 0) return "не простое число";

    return "простое число";
}

console.log(getExample(1001));
console.log(getExample(5));