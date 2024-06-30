const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const role = document.getElementById('user').value;
  const login = document.querySelector('input[name="login"]').value; // Используем querySelector
  const password = document.querySelector('input[name="password"]').value; // Используем querySelector

  let users = JSON.parse(localStorage.getItem('users')) || [];
  const existingUser = users.find(user => user.login === login);

  if (existingUser) {
    alert('Пользователь с таким логином уже существует!');
  } else {
    const newUser = { role, login, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Регистрация прошла успешно!');
    window.location.href = 'RetailItem.html'; 
  }
});
