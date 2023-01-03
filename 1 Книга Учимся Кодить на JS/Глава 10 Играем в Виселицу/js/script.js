//Игра Виселица

function ответыДляВиселицы() {
   const возможныйОтвет = [ //создаю массив из слов
   'взаимность',
   'претендент',
   'секундомер',
   'автомобиль',
   'авантюрист',
   'облачность',
   'наблюдение',
   'штукатурка',
   'укротитель',
   'виолончель',
   'заговорщик',
   'клубничник',
   'антарктика',
   'шпаргалка',
   'случайный',
   'функция',
   'массив',
   'настройки',
   'рождество',
   'декабрь',
   'боб',
   'планета',
   'язык',
   'компания',
   'футбол',
   'улитка',
   'лето'
   ];

   const размерМассиваОтветов = возможныйОтвет.length; 
   const случайныйИндекс = Math.floor(Math.random() * размерМассиваОтветов); //выбирается слуйчайный индекс массива (загадывается слуйчайное слово)
   return возможныйОтвет[случайныйИндекс].toUpperCase(); //возвращаем его, каждый раз, когда функция будет вызываться
}

function конецИгры(ответ, выигрыш) {
   const выигрышныйВариантБедолаги = `\n ______\n| /  |\n|    \n|  \\O/ \n|    |\n|   / \\\n=====`;
   const asciiВиселица = '______\n| /  |\n|    @\n|   /|\\\n|   / \\\n|\n=====';
   let сообщение = '';

   if (выигрыш) { // если параметр 'выигрыш' отсутствует, то будет "ложка" (undefined)
      сообщение = `УРААА! Ты выиграл! Ты спас бедолагу ${выигрышныйВариантБедолаги}`;
   }
   
   else {
      сообщение = `${'ВСЁ КОНЧЕНО! Ты проиграл(\n\n'}${asciiВиселица}`;
   }
   
   сообщение += `\n\nПравильный ответ: ${ответ}!`;
   alert(сообщение);
   return console.log(сообщение);
}

function сыграемВВиселицу(){
   const ответ = ответыДляВиселицы();
   const буквыОтвета = ответ.split('');
   const невернаяДогадка = [];
   let максНеверныхДогадок = (ответ.length - 2);
   if(ответ.length < 7 ){ //если будет слово меньше 7, то ошибаться можно столько раз, сколько букв в слове.
      максНеверныхДогадок = ответ.length
   }
   
   const прогрессИгры = '_'.repeat(ответ.length).split('');

   const подтверждение = confirm(`Давай сыграем в 'виселицу'!\n\nЯ задумал какое‑то слово. Можешь начинать отгадывать буквы!\nЭто самое обычное слово из ${ответ.length} букв.\nНу что, начнём?`);

   if(!подтверждение){
      return конецИгры(ответ, false);
   }

   while(невернаяДогадка.length < максНеверныхДогадок){
      const сообщениеПрогресса = `Пока ты добился: \n${прогрессИгры.join(" ")}\nОшибки: [${невернаяДогадка.toString()}]\n\nВыбирай следующую букву!`;
      const ответИгрока = prompt(сообщениеПрогресса).toUpperCase();
      
      if(!ответИгрока){
         return конецИгры(ответ);
      }

      if(ответИгрока === ответ){ //Если игрок напишет полностью слово, то он выиграет
         return конецИгры(ответ, true);
      }

      const догадка = ответИгрока;
      let вернаяДогадка = false;

      for(let i = 0; i<буквыОтвета.length; i++){
         if(буквыОтвета[i] === догадка){
            вернаяДогадка = true;
            прогрессИгры[i]=догадка;
         }
      }
      
      if(вернаяДогадка){
         if(прогрессИгры.join('') === ответ){
            return конецИгры(ответ, true);
         }
         alert('Верно!');
      }

      else {
         невернаяДогадка.push(догадка);
         alert(`Извини, буквы ${догадка} тут нет. \nТы можешь ошибаться ещё ${максНеверныхДогадок - невернаяДогадка.length} раз, прежде чем этот бедолага будет повешен.`);
      }
   }

   return конецИгры(ответ, false);
}
сыграемВВиселицу();
