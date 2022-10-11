function sum(numbers) {
    // let s = 0;
    // numbers.forEach((n) => {s += n;})
   return numbers.reduce((prev, curr) => prev + curr, 0);
}

function avg(numbers) {
    return sum(numbers) / numbers.length + 1;
}

function max(numbers) {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}

// exports.sum = sum // 좌측: 외부에서 사용하는 변수명, 우측: 현재(lib.js)에서 정의하는 변수명

module.exports = {
    sum,
    avg,
    max,
}