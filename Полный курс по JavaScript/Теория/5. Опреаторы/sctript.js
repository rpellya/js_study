// ОПЕРАТОРЫ 

// Операторы - это встроенная функция

/**
 * Опраторы
 * Операнды
 * Унарные и Бинарные
 * Инфиксная, префиксная и постфиксная записи
 */


//Операторы

/**
 * Арифмитические
 * Сравнения
 * Логические
 * Присваивания
 */

//Текстовые операторы

/**
 * typeof - можно проверить тип значения
 * instanceof - можно проверить пренадлежность объекта, того или иного класса
 * new
 * delete - удалить свойства в объекте
 */


// ОПЕРАТОР ПРИСВАИВАНИЯ

let a, b // оператор запятая

a = 10
b = a // присваивание

let c = a + b //20

/**
 * function =(переменная, выражение){
 *    1. Получение результата выражентя
 *    2. Поиск перменной по имени
 *    3. Присваивание результата выражения перменной
 *    4. Возврат рузльтата выражения
 * }
 */

// Операнды 
/**
 * a = 10 - a и 10 - операнды или аргументы
 */


// УНАРНЫЕ И БИНАРНЫЕ ОПЕРАТОРЫ

// У Унарных операторов всегда один операнд(аргумент)

a++
+a // с помощью него можно конвертировать строку в число
// delete obj.a 
typeof a  
// new Object() //с помощью него можно создать новый экзмпляр того или иного объекта

// Бинарные Операторы
//У бинарных оперторов два операнда(аргумента)

a = 5
a + b
a += 5
a === b
a && b


//ФОРМАТ ЗАПИСИЬ ОПЕРАТОРОВ

// Инфиксная запись

a = true
a + b
a += 5
a || b
a > b

// Префиксная запись
++a
// delete obj.a
typeof a

// Постфиксная запись

a++
// myFunction()


// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

/*
!(не) - всегда возвращает значение типа boolean
&& и || - возвращают значение одного из операндов
*/


// ОПЕРАТОР РАЗДЕЛЕНИЯ ОБЪЕКТА НА СВОЙСТВА ...

const button = {
   width: 200,
   text: 'Buy'
}

const redButton = {
   ...button,
   color: 'red' // если у объекта 'button' есть свойство 'color', его значение будет перезаписано
}

console.log(redButton)  // { width: 200, text: 'Buy', color: 'red' }

// пример 2

const buttonInfo ={
   text: 'Buy'
}

const buttonStyle = {
   color: 'yellow',
   width: 200,
   height: 300
}

const button2 = {
   ...buttonInfo, 
   ...buttonStyle
}

console.log(button2) //{ text: 'Buy', color: 'yellow', width: 200, height: 300 }

// Оператор ... - позволяет создать новый объект, если изменть свойства в button2, значения свойств не изменятся. Мутирование объектов не будет, если у исходных объектов не было вложенных объектов


// КОНКАТЕНАЦИЯ СТРОК

'Hello ' + 'world' // 'Hello world'

// Можно и использовать переменные при конкатенации строк


// ШАБЛОННЫЕ СТРОКИ

const myName = 'Роман'
const myCity = 'Санкт-Петербурге'

const greeting = `${'Всем привет, меня зовут'} ${myName}${', и я живу в'} ${myCity}` // в ${...} -  может быть любое выражение, например, вызов функции

console.log(greeting) //Всем привет, меня зовут Роман, и я живу в Санкт-Петербурге









