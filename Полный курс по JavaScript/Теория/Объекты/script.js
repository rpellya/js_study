//ОБЪЕКТЫ

/**
 * Объект - это набор свойтсв "Имя: значение".
 * Обеъкт - тип значений, тип перменных.
 * Объект, также ссылочный тип.
 * 
 */


// ПОЛУЧНИЕ ЗНАЧЕНИЙ СВОЙСТВ
const myCity = {
   city: "St. Petersburg",
   popular: true,
   country: "Russia"
}
console.log(myCity.city); // "St. Petrsburg"

console.log(myCity.popular); // true

// Также можное изменить значение свойтсв
myCity.city = "Moscow";

console.log(myCity.city); // "Moscow"

// И добавить новые свойства в объект, . - Точечная записть (dot notation)

myCity.name = "Roman";

console.log(myCity) // { city: 'Moscow', popular: true, country: 'Russia', name: 'Roman' }

// УДАЛЕНИЕ СВОЙСТВ ОБЪЕКТОВ

delete myCity.country;

console.log(myCity); // { city: 'Moscow', popular: true, name: 'Roman' }

// Доступ к значению свойств с использованием скобок [...] - Скобочная запись (breacket notation)

myCity['age'] = 18;

console.log(myCity); // { city: 'Moscow', popular: true, name: 'Roman', age: 18 }

const countryPropertyName = 'country';

myCity[countryPropertyName] = 'Russia';

console.log(myCity); //{city: 'Moscow', popular: true, name: 'Roman', age: 18, country: 'Russia' }


//Вложенные свойства, которые содержат вложженый объект

const myBio = {
   surname: 'Pellya',
   info: {
      isPopular: true,
      country: 'Russia'
   }
}

console.log(myBio.info.isPopular); // true

delete myBio.info['isPopular'];

console.log(myBio); // { surname: 'Pellya', info: { country: 'Russia' } }


//ИСПОЛЬЗОВАНИЕ ПЕРМЕННЫХ

const name = 'Roman';
const postsQty = 11;

/*
const userProfile = {
   name: name,
   postsQty: postsQty,
   isPopular: false
}
*/

//Сокращенный формат записи свойств. Сокращенные свойства рекомендуются размещать в начале объекта

const userProfile = {
   name,
   postsQty,
   isPopular: false
}

console.log(userProfile) // { name: 'Roman', postsQty: 11, isPopular: false }


//ГЛОБАЛЬНЫЕ ОБЪЕКТЫ

/**
 * window - для браузера
 * 
 * global - для node.js
 * 
 * globalThis - унифицированный глобальный объект
 * 
 * window.console - console - свойство глобальных объектов
 * 
 */


//МЕТОДЫ ОБЪЕКТОВ

/**
 * Метод - свойство объекта, значение которого - функция.
 * 
 */ 

/*
const cityUK = {
   city: 'London',
   cityGreeting: function(){
      console.log('Greetings!!');
   }
}
*/

//Можно и так сократить

const cityUK = {
   city: 'London',
   cityGreeting(){
      console.log('Greetings!!');
   }
}

cityUK.cityGreeting(); // Greetings!!

/**
 * Методы vs Совйтсва объектов
 * 
 * myCity.city - доступ к значению свойств
 * 
 * myCity.cityGreeting() - вызов метода
 * 
 */


//JSON (JavaScript Object Notation) - Формат обмена данными между компьютерами в интернете

/** 
 * Конвертация JSON в объект
 * 
 * Из JSON в формате строки от сервера, чтобы распарсить в JS
 * JSON.parse()
 * 
 * Конвертация объекта в JSON
 * 
 * JSON.stringfy()
 * 
 */
const post = {
   title: 'My post',
   likesQty: 5
}

console.log(post) // { title: 'My post', likesQty: 5 }

JSON.stringify(post) // '{"title":"My post","likesQty":5}' - тип этого значения строка

const postStringifined = JSON.stringify(post)

JSON.parse(postStringifined) //{title: 'My post', likesQty: 5}


//МУТАЦИЯ В JavaScript

//Значение примитивных типов

 const a = 10
 let b = a //копирование значение (copy by value)
 
 b = 30
 
 console.log(a) // 10
 console.log(b) // 30

//Знчение ссылочного типа

const personBob = {
   name: 'Bob', 
   age: 21
}

personBob.age = 22
personBob.isAdult = true

console.log(personBob.age) // 22
console.log(personBob.isAdult) // true

//МУТИРОВАНИЕ КОПИЙ

const person = {
   name: 'Bob',
   age: 25
}

const person2 = person // копирование ссылки (copy by referance)

//Мутация объекта, на который ссылается "person2"
person2.age = 26
person2.isAdult = true

//Мутация также отразилась на переменной "person"
console.log(person.age) // 26
console.log(person.isAdult) // true


//КАК ИЗБЕЖАТЬ МУТАЦИЙ

//Вариант 1

/*
const person = {
   name: 'Bob',
   age: 25
} 
*/
const person3 = Object.assign({}, person) // создаём новый объект на основании person. Ссылки не будут сохраненны. Но если у объекта есть вложенные объекты, то ссылки на них сохраняются

person3.age = 30

console.log(person3.age) // 30
console.log(person.age) //26

//Вариант 2

/*
const person = {
   name: 'Bob',
   age: 25
} 
*/

const person4 = {...person} // ... - оператор разделения объекта на свойства (Spread ). Ссылки на вложенные объекты сохраняются

person4.name = 'Maksim'

console.log(person4.name) // Maksim
console.log(person.name) // Bob

//Вариант 3

/*
const person = {
   name: 'Bob',
   age: 25
} 
*/

const person5 = JSON.parse(JSON.stringify(person)) // 1) Конвертация в строку. 2) Конвертация в объект. Ссылки на вложенные объекты не сохранются. 

person5.name = 'Sofia'

console.log(person5.name) // Sofia
console.log(person.name) // Bob


