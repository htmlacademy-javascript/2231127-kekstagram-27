// Функция_1 находит одно целое, натуральное
// число в диапазоне от заданного минимального значения (натуральное, целое, меньше максимального),
// до максимального (натуральное, целое, больше минимального).


const getRandomFloat = function(min, max) {
  if (min < 0 || max < 0) {
    console.log('Ошибка: Вы ввели отрицательно число! Принимаются только натуральные числа.');
    return NaN;
  }
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    console.log('Ошибка: Вы ввели десятичное число! Принимаются только целые числа.');
    return NaN;
  }
  if (max <= min) {
    console.log(`Ошибка: минимальное число (${min}) должно быть меньше максимального (${max}) и не равно ему!`);
    return NaN;
  }
  return Math.round(Math.random() * (max - min) + min);
};

// console.log('Начало теста!');

// console.log('тест № 1:');
// console.log(getRandomFloat(5, 10));

// console.log('тест № 2:');
// console.log(getRandomFloat(5, -10));

// console.log('тест № 3:');
// console.log(getRandomFloat(-5, 10));

// console.log('тест № 4:');
// console.log(getRandomFloat(5, 10.5));

// console.log('тест № 5:');
// console.log(getRandomFloat(5.5, 10));

// console.log('тест № 6:');
// console.log(getRandomFloat(5, 1));


// Функция_2_truncate принимает в параметры фактическую длину строки
// и максимальную длину строки, после сравнения фактической длины происходит возврат
// значения: false - если длина > заданной, true - в другом случе.

let strLength = 'Привет, как проходит твое обучение ?';

function truncate (str, maxLength) {
  strLength = str.length;
  if (strLength > maxLength) {
    return false;
  }
  return true;
}

console.log(strLength.length);
console.log(truncate(strLength, 32));

