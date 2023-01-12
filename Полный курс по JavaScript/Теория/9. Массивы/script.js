//МАССИВЫ

/**
 * Массив - это объект с цифровыми именами свойств.
*/

//Формат записи массивов

const myArray = [1,2,3]
console.log(myArray) // [1,2,3]

const myArray2 = new Array(1,2,3)
console.log(myArray2 ) // [1,2,3]


//Длина массива

console.log(myArray.length); // 3

myArray[2] = 'abc'

console.log(myArray) // [1,2,'abc']
console.log(myArray[2]) // 'abc'

myArray[3] = true

console.log(myArray) // [1,2,'abc',true]
console.log(myArray.length) // 4


//МЕТОДЫ МАССИВОВ (функции высшего порядка)

// PUSH

myArray.push(4) // добавление нового элемента с конца
console.log(myArray) // [1,2,'abc',true,4]

myArray.push(false)
console.log(myArray) // [ 1, 2, 'abc', true, 4, false ]

// POP

myArray.pop() // удаление последнего элемента массива
console.log(myArray) // [1,2,'abc',true,4]

const removedElement = myArray.pop() // также возвращает удалённый элемент

console.log(myArray) // [1,2,'abc',true]
console.log(removedElement) // 4

// UNSHIFT

myArray.unshift(false) // добавление элемента в начале массива

console.log(myArray) // [false,1,2,'abc',true]

// SHIFT

myArray.shift()
console.log(myArray) // [1,2,'abc',true]

const removedElement2 = myArray.shift() // также возвращает удалённый элемент

console.log(myArray) // [2,'abc',true]
console.log(removedElement2) // 1


// FOREACH

const myArray3 = [1,2,3]
console.log(myArray3) // [ 1, 2, 3 ]

myArray3.forEach(el => console.log(el*2)) // можно также использовать анонимн. функциональный выражения. Это колбэк функция, она будет вызвана внутри метода forEach. Этот метод будет перебирать все элементы массива и для каждого элемента массива он будет вызывать колбэк функцию. И в качестве значения для параметра (el), будет передаваться значение определенного элемента массива. ЭТОТ МЕТОД НЕ ВОЗВРАЩАЕТ НОВЫЙ МАССИВ!

console.log(myArray3) // 2 4 6 [ 1, 2, 3 ] Оригинальный массив не изменился 


// MAP

const myArray4 = [1,2,3]
console.log(myArray4) // [ 1, 2, 3 ]

//const newArray = myArray4.map(el => el*3)

//можно и так 
const newArray = myArray4.map(function (el) {
   return el * 3
})

console.log(newArray) // [ 3, 6, 9 ] MAP ВОЗВРАЩАЕТ НОВЫЙ МАССИВ
console.log(myArray4) // [ 1, 2, 3 ] Оригинальный массив не изменился 