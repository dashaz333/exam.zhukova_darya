const registrationForm = document.getElementById('registrationForm'); // получение ссылки на форму регистрации

registrationForm.addEventListener('submit', (event) => {
   event.preventDefault(); 

  // получение значений из полей формы
  const role = document.getElementById('user').value;
  const login = document.querySelector('input[name="login"]').value; 
  const password = document.querySelector('input[name="password"]').value; 

  let users = JSON.parse(localStorage.getItem('users')) || []; // получение данных о пользователях из localStorage или создание пустого массива
  const existingUser = users.find(user => user.login === login);  // поиск пользователя с таким же логином
  if (existingUser) {// проверка, существует ли пользователь с таким логином
    alert('Пользователь с таким логином уже существует!');
  } else {
    const newUser = { role, login, password }; // создание нового объекта пользователя
    users.push(newUser);  // добавление нового пользователя в массив
    localStorage.setItem('users', JSON.stringify(users)); // сохранение данных пользователей в localStorage
    alert('Регистрация прошла успешно!'); // вывод сообщения об успешной регистрации
    window.location.href = 'RetailItem.html'; // переход на страницу RetailItem.html
  }
});