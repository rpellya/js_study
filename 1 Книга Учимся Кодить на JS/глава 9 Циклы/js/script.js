//Циклы 

/*
Цикл в JavaScript (да и во всех прочих языках) — это блок кода, который повторяет сам себя, пока известное условие остаётся истинным. Условие — это всё, что программа проверяет, перед каждым перезапуском цикла. Всякий раз, пока условие остается «правкой», код будет циклично перезапускаться. Как только условие «правкой» быть перестанет (то есть станет «ложкой») — прекратится и цикл 
*/

//Самый обыкновенный while
/*
let i = 0;
while (i < 10){
   console.log("Счётчик показывает " + i + ". Давайте добавим ещё 1.");
   i++;
}
console.log("Всё!");

function akomCubes (totalCubes){
   const akom = 10;
   console.log("On the floor " + totalCubes + " cubes");
   while(totalCubes > 0){
      totalCubes -=akom;
      console.log("I put in the box " + akom + " cubs. So and left cubes on the floor " + totalCubes)
   }
}
let totalCubes = 320;

akomCubes(totalCubes);

*/

//Цикл for

/*
1. Объявлем переменную.
2. Задаём условие, которое интерпретатор будет проверять перед каждой итерацией цикла (чтобы определить, а стоит ли вообще запускать код по новой). Итерацией называют один виток цикла (например, если у нас было 10 циклов запуска, то можно сказать, что имели место 10 итераций кода).
3. Третьей частью нашего кода является инкремент (или же декремент). Он запускается в конце каждой итерации, чтобы всякий раз менять нашу переменную.

for(let i = 0; i<10; i++){
   console.log('i = ' + i);
}

console.log('End');

function посчитаемКа(крайнееЧисло) {
   const всеЧисла = []; // создаём пустой массив
   for (let i = 0; i < крайнееЧисло; i++) {
   всеЧисла.push(i + 1); // добавляем 1, 2, 3... и так далее — в массив
   }
   console.log(всеЧисла.join(', '));
  }
  посчитаемКа (300); 

  function случайныеНомераДляЛотереи(всегоНомеров, минЗначение, 
   максЗначение) {
   for (let i = 0; i < всегоНомеров; i++) {
   console.log(Math.floor(Math.random() * максЗначение) + 
   минЗначение);
   }
  }
  случайныеНомераДляЛотереи(6, 1, 20);
  случайныеНомераДляЛотереи(6, 1, 20); 
  
  const готовимПеченьки = [
   'Разогрейте духовку до 175 градусов',
   'Смешайте маргарин, белый сахар, тёмный сахар, ваниль и яйца',
   'Засыпьте муку, крахмал, соль, соду и шоколадную крошку',
   'Выложите на противень',
   'Оставьте в духовке на 12 минут',
   'Достаньте противень',
   'Приятного аппетита!'
  ];
  for (let i = 1; i <= готовимПеченьки.length; i++) {
   console.log( i + '. ' + готовимПеченьки[i-1]);
  }
*/

function заспойлерить(мойФильм){
   const фильмы = [
   'Властелин колец',
   'Шрек',
   'История игрушек',
   'Звёздные войны',
   'Холодное сердце',
   'Гамлет',
   'Золушка'
   ];
   const спойлеры = [
   'Кольцо Всевластья уничтожено.',
   'Фиона осталась огром.',
   "Базз Лайтер всё‑таки осознал, что он — игрушка.",
   'Звезда Смерти взорвана.',
   'Эльза перестала разрушать всё вокруг.',
   'Все умерли.',
   'И жили они долго и счастливо.'
   ];
   
   for(let i = 0; i < фильмы.length; i++){
      if(фильмы[i] === мойФильм){
         return console.log(спойлеры[i]);
      }
   }
   
   return console.log("К сожелению, этого фильма нет в списке");
};
заспойлерить('Шрек');

//ВИКТОРИНА
/*
1. Как называется блок кода, повторяющий себя снова и снова, пока заданное условие не перестанет быть истинным? //цикл
2. Что следует добавить на место прочерка в следующем коде?
let i = 0;
_____ (i < 5) { //while
   console.log(i);
   i++;} 
3. Какой из двух операторов цикла, которые обсуждались в главе, является более популярным? //for
4. Если ______ //условие всегда будет оставаться истинным, то код может застрять в бесконечном ______//цикле.
5. Сколько сообщений выдаст в консоль следующий код?
const номера = [1, 2, 3, 5, 6];
for (let j = 0; j < номера.length; j++) {
 console.log(j + ' => ' + номера[j]); // 5
} 
6. Когда при написании кода некоторое решение обусловлено не практическими или техническими соображениями, но условленными нормами, мы называем это ____________ // Соглашением о стандартах оформления кода. 
7. Сколько сообщений выдаст в консоль следующий код?
let k = 0;
while (k < 7) {
 console.log('ещё строчка!'); //бесконечно
}
8. При помощи какого символа отделяются друг от друга находящиеся в скобках части цикла for? (;;) 
9. Как называется средняя из трёх заключённых в скобки частей цикла for? //условие
10. Будет ли в результате запуска следующего кода выведено в консоль какое‑нибудь сообщение? Если нет — почему? Если да — какое? (Дайте ответ до проверки в консоли!)
const топ40Хитов = [
   'Hey Jude', 
   'Billie Jean', 
   'Imagine', 
   'Hotel Calif.'
];
for (let m = 1; m <= топ40Хитов.length; m++) {
 if (топ40Хитов[m] === 'Танец маленьких утят') {
 console.log('Достойный выбор!');
 } else if (топ40Хитов[m] === undefined) { //Да, это
 console.log('Какая ошибка!');
 } else if (топ40Хитов[m] === 'Hey Jude') {
 console.log("О! Слона‑то я и не приметил!"); 
 }
} 
11. Сколько сообщений выдаст в консоль следующий код? //18 раз
const максЗначение = 17;
let n = 0;
while (n <= максЗначение) {
 console.log('Посчитаем! ' + n);
 n++;
}
12. Назовите термин, которым обозначается единичное прохождение цикла? //Итерация
13. Что следует добавить на место прочерка в следующем коде?
const шляпы = ['ковбойская', 'котелок', 'колпак', 'цилиндр'];
for (let p = 0; p < __________________ //шляпы.length; p++) {
 console.log(шляпы[p] + ' — вот что я бы хотел носить!');
}
*/