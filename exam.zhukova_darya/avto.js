const users = [ //массив пользователей
    {
      login: 'dasha', //логин, пароль и роль пользователя 1
      password: '522',
      role:'admin'
    },
    {
      login: 'dima', //логин, пароль и роль пользователя
      password: '123',
      role:'user'
    }
  ];

  const loginForm = document.querySelector('form'); 
  
  loginForm.addEventListener('submit', (event) => { //обработчик событий submit 
  event.preventDefault();
  
    const login = document.querySelector('input[name="login"]').value; //получение значений ввода в форме логина
    const password = document.querySelector('input[name="password"]').value; //получение значений ввода в форме 
  
    const user = users.find(user => user.login === login && user.password === password); //поиск в массиве определенного логина и пароля
  
    if (user) { //проверка пользователей
      if(user.role ==='admin'){
        alert(`Добро пожаловать,  ${user.login}! У вас есть административные права.`);
        window.location.href = 'pet.html';
      }else if(user.role === 'user'){
        alert(`Добро пожаловать,  ${user.login}! У вас есть пользовательские права.`);
        window.location.href = 'pet.html';
      }
    } else {
      alert('Неверный логин или пароль. Повторите попытку'); // всплывающее окно с текстом
    }
  });
