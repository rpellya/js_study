/* 
ГЛАВА 7

Свойство — это некоторое именованное значение, прикреплённое к объекту.

Объекты - это одни из важнейших единиц в JavaScript.

Пример: Math.random() 
Math - является объектом, а точка (.) указывает на то, что следующее слово (random) идут скобки, то это указывает ещё и на то,
что - функция (вудь у всех функций есть скобки). 
Если свойство явлется функцией, то его называют методом!


Итак, вас наняла компания по рассылке спама из Гдетодалеконии. В этой компании приняты чёткие стандарты качества для своей продукции: 
их спам обязательно должен обещать огромные суммы денег, содержать орфографические 
и пунктуационные ошибки, призывать срочно действовать, но самое главное — 
всё письмо должно быть строго в верхнем регистре. Большинство пунктов этого 
списка уже выполнено квалифицированными специалистами (так что вам не 
стоит о них переживать), однако с прописными буквами вам придётся справиться 
самостоятельно, написав соответствующую функцию.



function крикоглушилка(сообщение) {
   return console.log(сообщение.toUpperCase());
  }
  крикоглушилка("Хотите заработать? Обращайтесь в наш банк! Мы удвоим, утроим, сделаем х100 от вашей положенной суммы на счет.");
*/
  //Сделать Градусник
  /*
  const замерзаниеВодыУФаренгейта = 32;
  const конверСоотношение = 1.8;

function переводФаренгейтВЦельсии(градусыФаренгейта){

   return  console.log(Math.floor((градусыФаренгейта - замерзаниеВодыУФаренгейта) / конверСоотношение)); 
}
переводФаренгейтВЦельсии (78);

function переводЦельсиивФаренгейт(градусыЦельсии){

   return  console.log(Math.floor((градусыЦельсии * конверСоотношение) + замерзаниеВодыУФаренгейта)); 
}
переводЦельсиивФаренгейт (0);
*/
/*
   Словом, confirm() замораживает всё, чтобы получить немедленное подтверждение от пользователя. 
   Значение, возвращаемое этой функцией, всегда булево. При нажатии OK возвращается true, а при нажатии «Отмена» (Cancel) — false. 

if (confirm('Привет') && confirm('Ку')){
   console.log('Как дела?');
}
else {
   console.log('Пока');
}
*/

/*
   Функция prompt(), как и confirm(), замораживает всё, но просит не ответить «да»/«нет» на вопрос, а ввести свой ответ или же нажать кнопку отмены.
   Отсюда и различие в ответе: prompt() вернёт лишь строку (с ответом пользователя), а confirm() всегда ответит булевым значением. 
   Строка вернётся лишь в том случае, если после ввода ответа пользователь нажал кнопку подтверждения; если же была нажата кнопка отмены, то prompt() вернёт в ответе null.

   console.log('Привет ' +  prompt('Как тебя зовут?'));


function приготовьтеМне(){
   const моеЛюбимоеБлюдо = prompt('Ваше любимое блюдо');
   if(моеЛюбимоеБлюдо){
      console.log(моеЛюбимоеБлюдо + ', отлично. Уже Готовлю!' )
   }
   else {
      console.log('У вас нет любимого блюда??');
   }
}
приготовьтеМне();

function pow(x, n) {
   return (n == 1) ? x : (x * pow(x, n - 1));
 }

 */

 /*
 Округляем десятичные дроби с toFixed() - всегда возвращает в ответе строку
 (8.111111).toFixed(); // если не указан аргумент, то функция округлит до ближайшего целого числа
(8.111111).toFixed(2); // в аргументе — 2, значит, после запятой будет 2 знак
 
 */
 
 //Калькулятор чаевых
 /*
 function чаевые(){

   let сообщение;
   const знаковПослеЗапятой = 2;
   const суммаЗаказа = prompt('Пожалуйста укажите стоимость вашего заказ.');
   if(суммаЗаказа){
      let процентЧаевых = prompt('Введите сколько вы хотите оставить чаевых (в процентах)')/100;
      
      if(процентЧаевых){
         let чаевые = (суммаЗаказа * процентЧаевых).toFixed(знаковПослеЗапятой);
         сообщение = "Чаевые вашего заказа = " + чаевые + "$";
      }
      else{
         сообщение = "Спасибо за заказ, приходите снова!";
      }
     
   }
   else{
      сообщение = 'Вы же только что сделали заказ?';
   }
   return console.log(сообщение); 
 }
 чаевые();
*/
 //ВИКТОРИНА
/*
 
1. Истина/Ложь: объект в JavaScript — это набор свойств (то есть именованных значений). //истина
2. При помощи какого метода (функции) можно изменить все буквы в строке на прописные? //toUpperCase()
3. При помощи какого ключевого слова вы можете создать переменную, которая никогда не будет изменяться? //const
4. Назовите термин, которым обозначают параллельные пояснения и комментарии по использованию и действию кода. //документировая
5. Когда стоит использовать в коде ключевое слово let? //когда значение будем меняться
6. Какие встроенные функции будут ожидать от пользователя нажатия на кнопку, прежде чем позволят интерпретатору продолжить работу с остальной частью кода? //confirm(), prompt() и alert().
7. Назовите термин, обозначающий код, в котором все функции и переменные обладают «говорящими» названиями (благодаря чему разработчику предельно просто взаимодействовать с написанным таким образом кодом). //самодкументированный код
8. При помощи какого метода (функции) можно изменить все буквы в строке на строчные? //toLowerCase()
9. Когда стоит использовать ключевое слово var? //никогда, лучше let или const (var устаревшее)
10. Истина/Ложь: когда свойством объекта является функция, её называют «дочерней». //Ложь, её называют "методом"
11. Какая встроенная функция будет ожидать от пользователя ввода информации, прежде чем позволит интерпретатору продолжить работу с остальной частью кода? //prompt()
12. Какое ключевое слово вы будете использовать наиболее часто для создания переменных? //const or let
13. Истина/Ложь: функция prompt() всегда возвращает булево значение. //Ложь. Она всегда возвращает строку (или же null)
14. Истина/Ложь: при использовании в коде чисел для облегчения понимания зачастую лучше присваивать их к переменным с «говорящими» названиями. //Истина
15. Истина/Ложь: функции alert(), confirm() и prompt() применяются профессиональными разработчиками весьма широко, так как помогают создавать и улучшать комфортный и красивый пользовательский интерфейс. //Ложь

*/
//СДЕЛАЙ САМ «переводчик» оценок!
/*
Напишите функцию, которая бы запрашивала у пользователя оценку по 
100‑балльной шкале и возвращала бы в ответ букву (соответствующую 5‑балльной 
шкале). Пользователь должен ввести числовое значение от 0 до 100; если значение 
больше или равно 90, то следует вернуть «А»; если больше или равно 80, то «B»; 
если больше или равно 70, то «C»; больше или равно 60 — «D». Если введено любое 
другое значение, тогда следует вернуть оценку «F» (то есть «двойку»). 
*/

function преводчикОценок(){
   const оценкаА = 90;
   const оценкаБ = 80;
   const оценкаС = 70;
   const оценкаД = 60;
   let сообщение;
   const оценкаУчащиегося = prompt('Введите ваши баллы за экзамен'); 
   if(оценкаУчащиегося){
      if(оценкаУчащиегося >= оценкаА){
         сообщение = "Ваша оценка A";
      }
      else if(оценкаУчащиегося >= оценкаБ){
         сообщение = "Ваша оценка B";
      }
      else if(оценкаУчащиегося >= оценкаС){
         сообщение = "Ваша оценка C";
      }
      else if(оценкаУчащиегося >= оценкаД){
         сообщение = "Ваша оценка D";
      }
      else{
         сообщение = "Ваша оценка F";
      }
   }
   else{
      сообщение = "Вы не писали экзамен?";
   }
   return console.log(сообщение);
}
преводчикОценок();