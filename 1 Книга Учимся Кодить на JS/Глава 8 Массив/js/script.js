//Массив 
/* 
Массив в JavaScript — это такой список значений, указанных в определённом порядке. 
Массив умеет хранить множество переменных, всего в одной.

Вот пример массива:
const звериВЗоопарке = ['лев', 'тигр', 'мишка'];
Ответ: (3) ['лев', 'тигр', 'мишка']
cnst булевыЗначения = [true, false];
const простыеЧисла = [2, 3, 5, 7, 11, 13];
const всеЛожки = [
false, // булев тип
0, // число
null, // null 
" ", // строка (пустая)
undefined // undefined ];
const массивСМассивом = [ // массив, внутри которого другой массив
['первый', 'внутренний', 'массив'],
['второй', 'внутренний', 'массив'],
['внутренний', 'массив', ['который', 'ещё','глубже']]
]; 

*/

//как посчитать элменты в массиве?
/*
const инструменты = [
   'гитара',
   'барабаны',
   'бас'
];
инструменты[2] = 'бас-гитара';
инструменты[3] = 'клавиши';
инструменты.push('микрофон'); // этот метод хорош ещё и тем, что вам необязательно знать, какой индекс следует присвоить новому элементу; .push() просто добавит его в конец списка!
инструменты.pop(); // вернётся последний элементв - микрофон
console.log(инструменты.length); // подсчет элементов массива
console.log(инструменты) // вывод массива в консоль

*/

/*
О методе .pop() также стоит знать и то, что у него есть возвращаемое значение. 
Это означает, что этот метод не только поможет уменьшить массив на его 
последний элемент, но также и вернёт в консоль этот последний элемент. 
Когда какая‑либо функция обладает возвращаемым значением, вы можете присвоить это значение переменной

А с помощью .shift() можно убрать элемент и из его начала.

используя .unshift(), можно добавить элемент и в начало списка.

const инструменты = [
   'гитара',
   'барабаны',
   'бас-гитара'
];
инструменты[3] = 'клавиши';
const анджелаБудетИгратьНа = инструменты.pop(); //присвоение клавиш
const нэяБудетИгратьНа = инструменты.pop(); //бас-гитара
const тониБудетИгратьНа = инструменты.pop(); // барабанов
const аЯбудуИгратьНа = инструменты.pop(); // и наконец соло‑гитары
console.log(инструменты.length); // в массиве осталось 0 инструментов
console.log("У нас в группе четыре человека: Анджела("+анджелаБудетИгратьНа+"), Нэя (" + нэяБудетИгратьНа + 
"), Тони (" + тониБудетИгратьНа + "), и я(" + аЯбудуИгратьНа + ")" );


.push(новыйЭлемент) — добавит новый элемент в конец списка;
.pop() — уберёт его оттуда (из конца), а также вернёт ответом в консоль;
.unshift(новыйЭлемент) — добавит новый элемент в начало списка;
.shift() — уберёт его оттуда (из начала), а также вернёт ответом в консоль.

*/
/*
Очень полезна бывает функция .toString(): с её помощью можно легко и просто превратить массив в строку, 
в которой через запятую перечислены все его элементы
const инструменты = [
   'гитара',
   'барабаны',
   'бас-гитара'
];
console.log(инструменты.toString());

*/
/*
Если же нужно сделать из массива строку, но не хотите, чтобы разделителем (строкой, которая разделяет все элементы) была запятая,
то можно использовать .join() вместе с нужным разделителем в качестве аргумента

const инструменты = [
   'гитара',
   'барабаны',
   'бас-гитара'
];
console.log(инструменты.join(" и " + "."));
*/

/*
Можно «склеить» между собой два массива при помощи метода .concat()

let корзинаСБельём = [
   'толстовка',
   'трусы',
   'носки',
   'бандана'
];
корзинаСБельём = корзинаСБельём.concat(корзинаСБельём);
console.log(корзинаСБельём);
*/

/*
.sort(). В отличие от .concat(), он таки на самом деле изменяет массив (и вдобавок возвращает в ответе изменение)
Кстати, стоит заметить, что отсортированный массив ведёт себя ровно так же, как и любой другой.

let корзинаСБельём = [
   'толстовка',
   'трусы',
   'носки',
   'бандана'
];
корзинаСБельём = корзинаСБельём.sort();
корзинаСБельём.sort()[3] = 'кепка'; // вернётся 4-й элемент их отсортированного массива
console.log("Я всё уложил, вот корзина с бельём: " + корзинаСБельём.join(", "));
*/
/*
 Можно ещё сделать новый массив из любой строки при помощи 
метода .split(). Например, если у вас есть некоторая строка, слова в которой 
отделены друг от друга звёздочками ('моя*звёздочная*строка'), и вам требуется 
сделать из всех этих слов массив (['моя','звёздочная','строка']), то вы просто 
можете применить .split('*') — со звёздочкой в аргументе. Интерпретатор 
JavaScript «сделает» (и вернёт в консоль) из этой строки массив, основываясь на 
том, что там, где есть звёздочка, кончается один элемент и начинается другой. 

console.log("моя*звёздочная*строка".split("*"));
console.log("строка, всегда желавшая быть массивом".split(', '));
console.log("сейчас сделаем все эти слова элементами массива".split(" "));
console.log("Леонардо | Донателло | Рафаэль | Микеланджело".split(' | '));
console.log("QWERTY".split(""));
 
цепочка
console.log('бювджшаыг'.toUpperCase().split('').join('-')); 

*/
/*
'1-2-3-'.repeat(6).split('-').sort().toString();
const предложения = 'Здесь два предложения. Сколько слов в каждом?';
предложения.split('. ')[0].split(' ').length; // количество слов в 1 предложении
предложения.split('. ')[1].split(' ').length; // количество слов во 2 предложении
console.log('Она меня не любит... :‑('.split('...')[0].concat(', а очень любит!').toUpperCase()); //ОНА МЕНЯ НЕ ЛЮБИТ, А ОЧЕНЬ ЛЮБИТ!

console.log(предложения.split('. ')[0].split(' ').length);
console.log(предложения.split('. ')[1].split(' ').length);


let результатыЗабега = [];
результатыЗабега[0] = "Алан";
результатыЗабега = результатыЗабега.concat(['Бернандо', 'Сэсил', 'Деррек', 'Эмилио']);
результатыЗабега.push('Фредерик');
результатыЗабега.push('Гордон');
результатыЗабега.pop();
const удалённыйБегунНаДопинге = результатыЗабега.shift();
результатыЗабега[2] = 'Деррик';
console.log("Вот наша новая команда по бегу: " + результатыЗабега.sort().join(', ') + ". Желаем удачного старта!");
*/
//Виторина 
/*
1. Как в JavaScript называется список значений, расположенных в определённом порядке? // Массив
2. Какое действие осуществляет .length()? // выдаёт количетсво элементов в массиве
3. Индекс — это номер, под которым в массиве значится тот или иной элемент.
4. Какое значение нужно будет указать в квадратных скобках, чтобы получить в ответе первый элемент массива? // мойМассив[0];
5. Истина/Ложь: в один массив могут входить самые разные типы данных. // Истина
6. При помощи какого встроенного метода можно добавить новый элемент в конец массива? // .push()
7. Истина/Ложь: если к моемуМассиву применить метод .toString(), то в ответ я получу строку, 
включающую все элементы массива, перечисленные через точку с запятой. // Ложь
8. Метод .pop() удаляет или возвращает в консоль последний элемент массива.
9. Истина/Ложь: после запуска следующего кода массив учебники будет иметь длину (.length()) 4.
const учебники = ['английский', 'биология'];
учебники.concat(['математика', 'история']); // Ложь
10. Каким термином называют последовательное выполнение одного метода за другим, указанных в одной и той же строчке кода? // Цепочка
11. Дайте ответ, прежде чем проверить в консоли: какой будет результат запуска следующего кода:
const швейныеПринадлежности = ['нитка', 'иголка', 'напёрсток']
швейныеПринадлежности.sort()[1]; // напёрсток
12. Истина/Ложь: если применить мойМассив.join("\n"), то строка "\n" здесь станет разделителем, 
то есть строкой, которая разделяет между собой элементы массива. //Истина
13. Метод .unshift() используется для добавления, а метод .shift() — для удаления элемента из начала списка.
14. Какое значение вернёт следующий код:
const дляВолос = ['шампунь', 'лак', 'гель'];
const мнеБольшеВсегоНравится = 2;
дляВолос [мнеБольшеВсегоНравится]; // гель
15. Истина/Ложь: если запустить мойМассив.join(' или '), то в консоль вернётся новый массив, 
включающий в себя все элементы старого, разделённые между собой строкой ' или '. // Ложь. В консоль будет возвращена строка, 
перечисляющая все элементы массива, разделяя их при помощи ' или '.
16. Дайте ответ, прежде чем проверить в консоли: какой будет результат запуска следующего кода:
['Г', 'В', 'А', 'Б'].toString().toLowerCase().split(',').sort()[3];  //г
17. Истина/Ложь: технически метод .join() не конвертирует массив в строку,
но скорее создаёт новую строку, основываясь на порядке элементов в массиве. //Истина
18. Дайте ответ, прежде чем проверить в консоли: какой будет результат запуска следующего кода:
const мойБитбокс = 'сдоба , стоп , сдоба , стоп , сдоба , стоп';
мойБитбокс.split(' , ').sort()[2].length; //5 (потому что в слове "сдоба" - 5 букв)
*/
function уловНаХэллоуин(){
   let корзинаНаХэллоуин = [];
   const ухожуИзДома = [
      'Kit-Kat',
      'Skittles'
   ];
   корзинаНаХэллоуин = корзинаНаХэллоуин.concat(ухожуИзДома);

   const первыйДом = [
      'Snickers'
   ];
   корзинаНаХэллоуин = корзинаНаХэллоуин.concat(первыйДом);

   const второйДом = [
      'Nuts', 
      'Bounty'
   ];
   корзинаНаХэллоуин = корзинаНаХэллоуин.concat(второйДом);

   корзинаНаХэллоуин.unshift("M&M's");

   console.log("Всё, не могу, ем батончик " + корзинаНаХэллоуин.pop());

   корзинаНаХэллоуин[2] = 'Starburst';

   корзинаНаХэллоуин.push('Milky Way','M&M\'s','Mars',"Hershey’s");

   корзинаНаХэллоуин.shift();

   корзинаНаХэллоуин.sort();

   console.log("Конфет в корзине: " + корзинаНаХэллоуин.length);

   console.log("В корзине есть: " + корзинаНаХэллоуин.join(", и ") + "!");
}
уловНаХэллоуин();