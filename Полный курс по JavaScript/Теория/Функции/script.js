//ФУНКЦИИ

//Функция - блок кода, который можн о выполнять многократно

let a = 5
let b = 3

function sum (a,b){
   const c = a+b
   console.log(c)
}

sum(a,b) // 8

a = 8
b = 12

sum(a,b) // 20
 
/**
 * Фунцкия может быть:
 * Именнованной
 * Присвоена переменной
 * Анонимной (не иметь имени)
 * Аргументом при вызове другой функции (колбэк функции)
 * значением свойства (метода) объекта
 * 
 * Функция - это объект
 * 
 */

function myFn(a, b){
   let c 
   a += 1
   c = a + b
   return c
}

myFn(10,3) // 14

/**
 * myFn - имя 
 * (a,b) - параметры, названия перменных при объевление функции
 * {...} - тело функции
 * return - результат (после слово return функция свою работу прекратит)
 * 
 * Если нет инструкции return, то функция возвращает undefined(не определено)
 * 
 * Вызов функции
 * myfn() - вызов функции
 * (10,3) - аргументы - те значения, которые передаем в вызове функции
 */


//ПЕРЕДАЧА ЗНАЧЕНИЯ ПО ССЫЛКЕ

const personOne = {
   name: 'Bob',
   age: 21
}

function increasePersonAge(person){
   person.age += 1
   return person
}

increasePersonAge(personOne) // Передаче объекта по ссылке
console.log(personOne.age) // 22

/**
 * Внутри функции НЕ РЕКОМЕНДУЕТСЯ мутировать ВНЕШНИЕ объекты
 */

//Создание копии объекта

const personOne2 = {
   name: 'Bob',
   age: 21
}

function increasePersonAge2(person){
   const updatePerson2 = Object.assign({}, person)
   updatePerson2.age += 1
   return updatePerson2
}

const updatePersonOne2 = increasePersonAge2(personOne2) 
console.log(personOne2.age) // 21
console.log(updatePersonOne2.age) // 22


//КОЛБЭК ФУНКЦИИ

