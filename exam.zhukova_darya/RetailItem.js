class RetailItem {  //класс с атрибутами описание, количество на складе, цена и новая цена
  constructor(description, quantityInStock, price, discountPercentage = 0) { //конструктор, который создает экземпляры
    this.description = description; //описание
    this.quantityInStock = quantityInStock; //кол-во
    this.originalPrice = price; //цена
    this.discountPercentage = discountPercentage; // процент скидки
    this.applyDiscount(); // применить скидку при создании объекта
  }

  applyDiscount() {
    this.price = this.originalPrice - (this.originalPrice * (this.discountPercentage / 100));
  }
}

const itemsTableBody = document.getElementById("itemsTableBody");
const addItemButton = document.getElementById("addItemButton");

let items = []; // массив для хранения товаров

// функция для добавления товара в список
function addItem() {
  const description = document.getElementById("descriptionInput").value; // считываем описание
  const quantity = parseInt(document.getElementById("quantityInput").value); //считываем кол-во
  const price = parseFloat(document.getElementById("priceInput").value); //считываем цену
  const discount = parseFloat(document.getElementById("discountInput").value) || 0; // Считываем скидку или 0 если не ввели
// проверка корректности введенных данных
  if (description && !isNaN(quantity) && !isNaN(price) && !isNaN(discount)) {
    const newItem = new RetailItem(description, quantity, price, discount);
    items.push(newItem); // добавляем новый товар в массив 
    updateItemsList(); // обновляем таблицу
    clearInputs(); // очищаем поля ввода
  } else {
    alert("Пожалуйста, введите корректные данные."); // вывод надписи, если что-то не ввели
  }
}

// функция для обновления таблицы 
function updateItemsList() {
  itemsTableBody.innerHTML = ""; // Очистка существующей таблицы

  items.forEach((item, index) => {
    const row = document.createElement("tr"); // создание новой строки таблицы
    row.innerHTML =   
      `<td>${index + 1}</td>
      <td>${item.description}</td>
      <td>${item.quantityInStock}</td>
      <td>${item.originalPrice.toFixed(2)}</td>
      <td>${item.price.toFixed(2)}</td>
      <td><button class="delete-button" onclick="deleteItem(${index})">Удалить</button></td>`
    ;
    itemsTableBody.appendChild(row); //вывод на сайт
  });
}

// функция для удаления товара по индексу
function deleteItem(index) {
  items.splice(index, 1); // удаляем элемент по индексу
  updateItemsList(); // обновляем таблицу
}

// Функция для очистки полей ввода
function clearInputs() {
  document.getElementById("descriptionInput").value = "";
  document.getElementById("quantityInput").value = "";
  document.getElementById("priceInput").value = "";
  document.getElementById("discountInput").value = "";
}

// Инициализация списка товаров при загрузке страницы
items = [ //вывод того, что есть в задании
  new RetailItem("Пиджак", 12, 6410),
  new RetailItem("Дизайнерские джинсы", 40, 5800),
  new RetailItem("Рубашка", 20, 3200),
];
updateItemsList();

addItemButton.addEventListener("click", addItem); // добавление обработчика события на кнопку добавить