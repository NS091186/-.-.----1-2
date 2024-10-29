
function checkForm(el) {
    let name = el.name.value;

    let pass = el.pass.value;
 
    let repass = el.repass.value;

    let state = el.state.value;
   let fail = "";
   if (name =="" || pass == "" || state == "")
    fail="Заполните все поля";
else if (name.lenght <= 1 || name.lenght >50)
    fail = "Введите корректное имя";
else if (pass != repass)
    fail = "Пароли должны совпадать";
else if (pass.split("&").lenght > 1)
    fail="Некорректный пароль";

   if (fail != "") {
document.getElementById('error').innerHTML = fail;
    return false;
   }else {
    alert ("Все данные корректно заполнены!");
    return true;
   }
}

// Бургер-меню

console.log('Скрипт загружен');

const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

