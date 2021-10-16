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
    let x = 0;
    let y = 0;
    for (let i = 0; i < numbers.length; i++) {
        if ((i + 1) % 2 !== 0) {
            x += numbers[i];
        } else {
            y += +numbers[i];
        }
    }
    x = (x / (numbers.length / 2)).toFixed(2);
    y = (y / (numbers.length / 2)).toFixed(2);
    str1 = x.toString();
    str2 = x.toString();
    str3 = str1 + " " + str2;
    return str3;
}

module.exports = {
    sum,
    avg,
    max,
    mean2,
};
