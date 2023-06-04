//Основные переменные
const formcheckbox = document.getElementById("formbox");
let user = document.getElementById("name-field");
const avatar = document.getElementById("userpic-field");
const comment = document.querySelector(".form__comment-field");
let chat = document.querySelector(".chat__form");
const button = document.querySelector(".button");
user.addEventListener("input", function(){
   checkName(this);
});

//Функция коррекции и скрытия имени пользователя
function checkName(user){
    let radio = document.querySelector('input[name="checkbox"]:checked').value;
    if (radio === "yes") {
        user = user.value.replaceAll(' ', "");
        return user[0].toUpperCase() + user.slice(1).toLowerCase();
    } else {
         user = 'username';
        return user;
    }
}

//Функция вывода даты
function checkDate(chatdate){
    let date = new Date();
    const dayNumber = date.getDay();
    let dayOfWeek =
    (dayNumber === 0) ? 'Вс' :
     (dayNumber === 1) ? 'Пн' :
      (dayNumber === 2) ? 'Вт' :
        (dayNumber === 3) ? 'Ср' :
          (dayNumber === 4) ? 'Чт' :
            (dayNumber === 5) ? 'Пт' :
              (dayNumber === 6) ? 'Сб': 'Неизвестный день недели';
    const day = date.getDate();
    const monthNumber = date.getMonth();
    let month =
    (monthNumber === 0) ? 'Янв.' :
      (monthNumber === 1) ? 'Февр.' :
        (monthNumber === 2) ? 'Март' :
          (monthNumber === 3) ? 'Апр.' :
            (monthNumber === 4) ? 'Май' :
              (monthNumber === 5) ? 'Июнь' :
                (monthNumber === 6) ? 'Июль' :
                  (monthNumber === 7) ? 'Авг.' :
                    (monthNumber === 8) ? 'Сент.' :
                      (monthNumber === 9) ? 'Окт.' :
                        (monthNumber === 10) ? 'Нояб.' :
                          (monthNumber === 11) ? 'Дек.' : 'Неизвестный месяц';
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return chatdate = `${dayOfWeek + " " + day + " " + month + " " + year + " " + hours + ":" + minutes}`;
    }

//Функция вывода сообщения
function addNewMessage() {

  //Создание блока сообщения
  let newDiv = document.createElement('div');
  newDiv.innerHTML = `<div class="chat__message" id="chatmessage">
    <img class="chat_userpic" id="chatuserpic" src="" alt="pic">
    <p class="chat__name" id="chatname"></p>
    <p class="chat__date" id="chatdate"></p>
    <p class="chat__comment" id="chatcomment"></p>
    </div>`;
  chatform.prepend(newDiv);

  //Рандом аватаров
  let a = getRndInteger(1,6);
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let randomSrc =
  (a === 1) ? "https://i.pinimg.com/140x140_RS/cb/13/19/cb1319a4ce21f3a5cfa312fd28d55e4c.jpg" :
    (a === 2) ? "https://ddgimgs-f43e.kxcdn.com/1811765/xs_5vmw66_d1c300a7025045e372c9116469a9c5879cc9c08d.jpg" :
      (a === 3) ? "http://myday.uz/images/small/30642-1.jpg" :
        (a === 4) ? "https://m.media-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_QL75_UY140_CR55,0,140,140_.jpg" :
          (a === 5) ? "https://img.dreamies.de/img/16/s/qega52aa2lk.jpg" :
            (a === 6) ? "https://s.kaskus.id/user/avatar/2014/02/28/avatar6501578_1.gif" : 'Неизвестный';

  //Объявление переменных для вывода сообщения
  let chatuserpic = document.getElementById("chatuserpic");
  let chatname = document.getElementById("chatname");
  let chatcomment = document.getElementById("chatcomment");
  let chatdate = document.getElementById("chatdate");

  //Вывод аватара (рандом или выбранный пользователем)
  chatuserpic.setAttribute('src', `${avatar.value}`);
  const x = chatuserpic.getAttribute('src');
  if (x === "") {
    chatuserpic.setAttribute('src', `${randomSrc}`);
    };
  //вывод сообщения
  chatname.textContent = `${checkName(user)}`;
  chatcomment.textContent = `${comment.value.replace(/(xxx|viagra)/gi,"***")}`;
  chatdate.textContent = `${checkDate(chatdate)}`;

  //Сброс формы
  formcheckbox.reset();
}

button.addEventListener("click", addNewMessage);