/**
 * добавляет пробелы на каждом третьем разряде числа
 * @param number форматируемое число
 * @param {string} symbol символ для вставки между триадами
 * @returns {string} итоговое число в виде строки
 */
export function formatNumber(number, symbol) {
	if (isNaN(number*1)) {
		return "not number";
	}

	let stringNum = number.toString();
	let formattedNum = [];

	for (let i = stringNum.length - 1; i >= 0; i--) {
		if (((stringNum.length - i) % 3) === 0 && (stringNum.length - i) > 0) {
			formattedNum[i] = `${symbol}${stringNum[i]}`;
		} else {
			formattedNum[i] = stringNum[i];
		}
	}

	return formattedNum.join("");
}

export function compareDateArrays(first, second) {
	let result = true;

	if (first.length !== second.length) return false;

	for (let i = 0; i < first.length; i++) {
		if (first[i].getTime() !== second[i].getTime()) {
			result = false;
			break;
		}
	}

	return result;
}

/**
 * Функция для склонения русских слов
 * Пример использования: ruDeclination(5,'комментари|й|я|ев')
 *
 * @author Павел Белоусов <pafnuty10@gmail.com>
 *
 * @param      {number}  number  Число, для которого будет расчитано окончание
 * @param      {string}  words   Слово и варианты окончаний для 1|2|100 (1 комментарий, 2 комментария, 100 комментариев)
 * @return     {string}  Cлово с правильным окончанием
 */
export function ruDeclination(number, words) {
	'use strict';
	let w = words.split('|'),
		n = Math.abs(number * 1); // abs на случай отрицательного значения
	return n % 10 == 1 && n % 100 != 11 ? w[0] + w[1] : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? w[0] + w[2] : w[0] + w[3]);
}

/**
 * Возвращает HTML-код, включая сам объект, а не только его содержимое
 * @returns {jQuery}
 */
jQuery.fn.outerHTML = function () {
	return jQuery('<div />').append(this.eq(0).clone()).html();
};

/**
 * Копирует простые объекты (без вложенных ссылочных типов) в новый экземпляр
 * @param arrayOfObj [{}, {}...] исходный массив объектов
 * @returns {[]} новый массив объектов
 */
export function copyArrayOfObjects(arrayOfObj) {
	let resultArray = [];

	for (let obj of arrayOfObj) {
		resultArray.push(Object.assign({}, obj));
	}

	return resultArray;
}

export function clamp(value, min, max) {
	return Math.min(Math.max(value, min), max);
}
