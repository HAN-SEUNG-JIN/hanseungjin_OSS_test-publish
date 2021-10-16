function sum(numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

function avg(numbers) {
    return sum(numbers) / numbers.length;
}

function max(numbers) {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}

function mean2(numbers) {
    if (numbers.length % 2 !== 0) {
        return "Invalid input";
    }
    return;
}

module.exports = {
    sum,
    avg,
    max,
    mean2,
};
