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
    let str1 = x.toString();
    let str2 = y.toString();
    let str3 = str1 + " " + str2;
    return str3;
}

function med2(numbers) {
    if (numbers.length % 2 !== 0) {
        return "Invalid input";
    }
    let min = Number.POSITIVE_INFINITY;
    let x, y, idx;
    for (let i = 0; i < numbers.length / 2; i++) {
        x = numbers[2 * i];
        y = numbers[2 * i + 1];
        sum = 0;
        for (let j = 0; j < numbers.length / 2; j++) {
            sum += Math.sqrt(
                Math.pow(numbers[2 * j] - x, 2) +
                    Math.pow(numbers[2 * j + 1] - y, 2)
            );
        }
        if (sum < min) {
            min = sum;
            idx = i;
        }
    }
    let str1 = numbers[2 * idx].toString();
    let str2 = numbers[2 * idx + 1].toString();
    let str3 = str1 + " " + str2;
    return str3;
}

module.exports = {
    sum,
    avg,
    max,
    mean2,
    med2,
};
