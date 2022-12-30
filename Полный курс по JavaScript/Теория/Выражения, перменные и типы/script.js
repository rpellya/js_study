/**
 * Практически все сущности в JavaScrpit - объект
 * 
 * Объект - набор свойств "Имя: значение";
 *
 * Пример объекта 
 * {
 *  visible: true, //ключ - visible, true - значение
 *  colorDepth: 24,
 *  title: "My Image"
 *  orientation: { //это вложенный объект, то есть его свойства объект
 *    angle: 0,
 *    type: 'landscape'
 *  },
 * } //это всё свойства объекта
 * 
 * console.log('Hello World')
 * 
 * console - объект 
 * log - метод
 * . - точечная запись, с помощью её можно получить доступ к свойствам объектам
 * () - вызов метода
 * 'Hello world' - значение типа "String"
 * 
 * .dir() - с помощью этого метода можно отобразить в консоли все свойства того или иного объекта
 * .table() - все свойства объекта будут отображенны в виде таблицы
 * 
 * 
 * Выражения 
 * Результатом каждого выражения явлется значение
 * 
 * Выражение с побочными действиями - не только возвращает значение, но и выполняет другие действия (присваивание, изменение значение)
 * 
 * 
 * Переменные
 * Дают возможность повторного доступа к значениям.
 * 
 * Имена переменных 
 * PascalCase - типы и классы
 * DB_PASSWORD - значение известны до запуска приложения и не меняются (const)
 * camelCase - все остальные перменные
 * 
 * let, const - появились в ECMAScript 6 (2015)
 * var - с самого начала
 * 
 * 
 * Тип переменной определяется типом присвоенного значения
 * 
 * 
 * Типы
 * Примитивные типы и ссылочные типы
 * 
 * Перменная - имеет значение - значение имеет тип
 * 
 * Примитивные типы:
 * string(строка) - 'abc'
 * boolean(логический) - true/false
 * number(число) - 0, 1, -2, 5.3 ...
 * null - значение отсуствует, пока что значения нет, но возможно потом будет
 * undefined - значение нет, не определенно 
 * symbol(символ) - можно создавать уникальные значения
 * 
 * Ссылочний тип:
 * object(объект)
 * Переменная будет хранить ссылку на объект 
 */
 const objectA = {
 a: 10,
 b: true
 }
 const copyOfA = objectA
 copyOfA.a = 20
 //objectA.a -> 20
 
 copyOfA.c = "abc" //также можно добавить новое свойство к объекту
 // objectA.c -> "abc"
 
 /** 
 * Динамическая типизация. 
 * То есть можно одной присвоить одной переменной разные типы
 */
 a = "abc" // String
 a = 10 // Number

 /**
  * JavaScript - динамически типизируемый язык
  * 
  * let a = 10
  * a =true
  * a = "abc"
  * a = undefined
  * 
  * function b(){
  *   console.log("Hello")
  * }
  * b() // "Hello"
  * 
  * b = 10
  * 
  * b() // Uncaught TypeError: b is not a function
  * 
  * const - позволяет предотвратить возможные проблемы связанные с динамической типизацией
  * 
  * const b = () =>{ 
  *   console.log("Hello")
  * }
  * b() // "Hello"
  * 
  * b = 10 // TypeError: Assignment to constant variable
  * 
  * b()
  * 
  * Правила работы с переменными:
  * 1. Все переменные объевлять перед их использованием.
  * 2. Стараться использовать const везде, где это возможно.
  * 
  */
 
