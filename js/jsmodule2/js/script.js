// "use strict";

// /*
//  * Для объявления переменной используются ключевые слова let и const,
//  * за которыми следует имя переменной
//  */
// let firstNumber;

// /*
//  * Переменные объявленые как const обязательно должны быть инициализированы
//  * значением во время объявления, иначе будет ошибка
//  */
// const secondNumber = 15;

// /*
//  * Значение переменной можно получить обратившись к ней по имени.
//  * console.log() используется для вывода данных в консоль разработчика,
//  * с этим методом более детально познакомимся позже.
//  */
// console.log('secondNumber: ', secondNumber); // 15

// /*
//  * Eсли мы изначально не присваиваем переменной, объявленой как let,
//  * никакого значения, в нее помещается специальное значение undefined (не определено)
//  */
// console.log('firstNumber до присваивания значения: ', firstNumber); // undefined

// /*
//  * После объявления, если переменная объявлена как let,
//  * можно записать значение
//  */
// firstNumber = 5;

// /*
//  * Помним о том что нельзя перезаписать значение
//  * переменной объявленой используя const
//  *
//  * secondNumber = 10; // будет ошибка
//  */

// // После присвоения значения
// console.log('firstNumber: ', firstNumber); // 5


// let name;

// /*
//  * Переменная name объявлена, но не инициализирована, поэтому
//  * ее значение undefined (не определено), тогда как переменная age
//  * не была объявлена, поэтому доступ к ней вызывает ошибку ReferenceError
//  */
// console.log(name); // undefined
// console.log(age); // ReferenceError: age is not defined


// // console.log(a); // ReferenceError: a is not defined
// let a = 10;
// console.log(a); // 10

// // console.log(b); // ReferenceError: b is not defined
// const b = 15;
// // console.log(b); //15
// const isAuthenticated = true;
// const canMerge = false;
// const hasChildren = true;
// const isModalOpen = false;
// undefined
// let a;
// console.log(typeof a); // "undefined"

// // null
// const b = null;
// console.log(typeof null); // "object"

// // Number
// const c = 5;
// console.log(typeof c); // "number"

// // String
// const message = 'JavaScript is awesome!';
// console.log(typeof message); // "string"

// // Boolean
// const isActive = false;
// console.log(typeof isActive); // "boolean"

// const message = 'JavaScript is awesome!';
// /*
//  * В круглых скобках указываем имя переменной,
//  * значение которой необходимо вывести в консоль
//  */
// console.log(message); // JavaScript is awesome!

// const name = 'Mango';
// /*
//  * Можно сначала указать какую-то произвольную строку,
//  * к примеру описывающую переменную или дополняющую ее, после чего
//  * поставить запятую и указать имя переменной
//  */
// console.log('My name is: ', name); // My name is: Mango

// /*
//  * alert выводит модальное окно, текст которого соотсветствует значению
//  * переменной (или литерала) которую мы укажем в скобках.
//  */
// alert(message);
/*
 * Просим клиента подтвердить бронь на отель
 * и сохраняем в переменную результат работы confirm
 */
const isComing = confirm('Please confirm hotel reservation');
console.log(isComing);
