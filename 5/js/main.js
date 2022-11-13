/* eslint-disable no-console */
// // Функция_1 находит одно целое, натуральное
// // число в диапазоне от заданного минимального значения (натуральное, целое, меньше максимального),
// // до максимального (натуральное, целое, больше минимального).


// function getRandomFloat(min, max) {
//   if (min < 0 || max < 0) {
//     console.log('Ошибка: Вы ввели отрицательно число! Принимаются только натуральные числа.');
//     return NaN;
//   }
//   if (!Number.isInteger(min) || !Number.isInteger(max)) {
//     console.log('Ошибка: Вы ввели десятичное число! Принимаются только целые числа.');
//     return NaN;
//   }
//   if (max <= min) {
//     console.log(`Ошибка: минимальное число (${min}) должно быть меньше максимального (${max}) и не равно ему!`);
//     return NaN;
//   }
//   return Math.round(Math.random() * (max - min) + min);
// }

// console.log('Начало теста!');

// console.log('тест № 1:');
// console.log(getRandomFloat(5, 10));

// // console.log('тест № 2:');
// // console.log(getRandomFloat(5, -10));

// // console.log('тест № 3:');
// // console.log(getRandomFloat(-5, 10));

// // console.log('тест № 4:');
// // console.log(getRandomFloat(5, 10.5));

// // console.log('тест № 5:');
// // console.log(getRandomFloat(5.5, 10));

// // console.log('тест № 6:');
// // console.log(getRandomFloat(5, 1));


// // Функция_2_truncate принимает в параметры фактическую длину строки
// // и максимальную длину строки, после сравнения фактической длины происходит возврат
// // значения: false - если длина > заданной, true - в другом случе.

// let strLength = 'Привет, как проходит твое обучение ?';

// function truncate (str, maxLength) {
//   strLength = str.length;
//   if (strLength > maxLength) {
//     return false;
//   }
//   return true;
// }

// console.log(strLength.length);
// console.log(truncate(strLength, 32));


const DISCRIPTION = [
  'Ваше мнение по этому поводу ?',
  'Просто классные моменты :)',
  'Такое не каждый день увидишь!',
  'Этот год запомнится надолго...',
  'Немного неудачный кадр, но какой редкий !!!',
];

const MESSAGE = [
  'Всё отлично!',

  'В целом всё неплохо. Но не всё.',

  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',

  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',

  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',

  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME_USER = [
  'Иван',
  'Артем',
  'Глеб',
  'Светлана',
  'Мирослав',
  'Наталья',
  'Татьяна',
  'Вероника',
];

const array = function (start, end) {
  const arrayNumber = [];
  for (let i = start; i <= end; i++) {
    arrayNumber.push(i);
  }
  arrayNumber.sort(() => Math.random() - 0.5);
  return arrayNumber;
};

const idPhotoNumber = array(1, 25);
const urlPhoto = array(1, 25);
const likesPhoto = array(15, 200);
const idComments = array(1, 25);

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a));
  const upper = Math.floor(Math.max(b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = function (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

const functionComments = () => ({
  id: idComments.pop(),
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAME_USER),

});

const photoInformation = () => ({
  id: idPhotoNumber.pop(),
  url: `photos/${urlPhoto.pop()}.jpg`,
  description: getRandomArrayElement(DISCRIPTION),
  likes: likesPhoto.pop(),
  comments: getRandomArrayElement(Array.from({ length: 1 }, functionComments)),
});

const comments = Array.from(functionComments);
console.log(comments);

const photo = Array.from({ length: 25 }, photoInformation);
console.log(photo);
