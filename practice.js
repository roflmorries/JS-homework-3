// 1

let numOne = parseInt(prompt("Введите число"));
let numTwo = parseInt(prompt("Введите число"));

if (numOne > numTwo) {
    console.log(`${numOne} больше ${numTwo}`);
}
else if (numOne < numTwo) {
    console.log(`${numOne} меньше ${numTwo}`);
}
else {
    console.log(`${numOne} равно ${numTwo}`);
}

// 2

let distanceKm = parseInt(prompt('Введите дистанцию'));
let distanceFt = parseInt(prompt('Введите дистанцию'));

const ftToMetre = 0.305;
const metresToKm = 0.001;
let distanceFtToKm = distanceFt * ftToMetre * metresToKm;



if (distanceKm > distanceFtToKm) {
    console.log(`${distanceKm} больше чем ${distanceFtToKm}`);
}
else if (distanceKm < distanceFtToKm) {
    console.log(`${distanceKm} меньше ${distanceFtToKm}`)
}
else  {
    console.log(`${distanceKm} равно ${distanceFtToKm}`);
}


// 3

const firstNum = parseInt(prompt('Введите число'));
const secondNum = parseInt(prompt('Введите число'));

if (secondNum % firstNum === 0) {
    console.log(`${firstNum} является делителем ${secondNum}`);
} else {
    console.log(`${firstNum} не является делителем ${secondNum}`)
}

if (firstNum % secondNum === 0) {
    console.log(`${secondNum} является делителем ${firstNum}`);
} else {
    console.log(`${secondNum} не является делителем ${firstNum}`)
}


// 4

const num = parseInt(prompt("Введите число"));

let lastNum = num % 10;

if (lastNum % 2 === 0) {
    console.log(`${lastNum} является четным числом`)
} else {
    console.log(`${lastNum} является нечетным числом`)
}


// 5

const num = parseInt(prompt("Введите двухзначное число"));

let firstNum = Math.floor(num / 10);
let secondNum = num % 10;

if (firstNum > secondNum) {
    console.log(`${firstNum} больше ${secondNum}`);
} else if (firstNum < secondNum) {
    console.log(`${secondNum} больше ${firstNum}`);
} else {
    console.log('Цифры равны')
}


// 6


const num = parseInt(prompt("Введите трехзначное число"));

if (num >= 100 && num <= 999) {

    let firstNum = Math.floor(num / 100);
    let secondNum = Math.floor((num % 100) / 10);
    let thirdNum = num % 10;


    let sum = firstNum + secondNum + thirdNum;

    if (sum % 2 === 0) {
        console.log('Сумма чисел является парной')
    } else {
        console.log('Сумма чисел не является парной')
    }

    if (sum % 5 === 0) {
        console.log('Сумма чисел кратна 5')
    } else {
        console.log('Сумма чисел не кратна 5')
    }

    numProduct = firstNum * secondNum * thirdNum;

    if (numProduct > 100) {
        console.log('Произведение чисел больше 100')
    } else {
        console.log('Произведение чисел меньше 100')
    }

} else {
    console.log(prompt("Enter a three-digit number"));
}


// 7

let userValue = parseInt(prompt('Введите трехзначное число'));

if (!isNaN(userValue) && userValue >= 100 && userValue <= 999) {

    let firstNum = Math.floor(userValue / 100);
    let secondNum = Math.floor((userValue % 100) / 10);
    let thirdNum = userValue % 10;

    if (firstNum === secondNum && secondNum === thirdNum) {
        console.log('Все числа одинаковые');
    } else if (firstNum === secondNum) {
        console.log('Первое и второе число одинаковые');
    } else if (secondNum === thirdNum) {
        console.log('Второе и третье число одинаковые');
    } else if (firstNum === thirdNum) {
        console.log('Первое и третье число одинаковые');
    } else {
        console.log('Одинаковых чисел нет');
    }
} else {
    console.log('Уппс... Вы ввели не трехзначное число!');
}


// 8

let userValue = parseInt(prompt("Введите шестизначное число"));

if (userValue >= 100000 && userValue <= 999999) {

    let digits = userValue.toString();

    if (digits[0] === digits[5] && digits[1] === digits[4] && digits[2] === digits[3]) {
        console.log('Число является зеркальным');
    } else {
        console.log('Число не является зеркальным');
    }
} else {
    console.log('Уппс... Вы ввели не шестизначное число!');
}