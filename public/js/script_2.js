//----------- Клиентская часть Post 
document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.querySelector('#myform'); //Находим форму заказа в html файле
    orderForm.addEventListener('submit', async (event) => {
      event.preventDefault(); // Отменяем стандартную отправку формы
  
      //Создаём объект с данными формы
      const formData = {
        cookie: orderForm.querySelector('input[type="text"]').value, // Получаем из формы введённые данные, первая строка - название
        name: orderForm.querySelectorAll('input[type="text"]')[1].value, // Имя пользователя 
        phone: orderForm.querySelectorAll('input[type="text"]')[2].value // Номер телефона
      };
  
      try {
          const response = await fetch('/order', {
            method: 'POST', // Используем метод POST, разработанный ранее
            headers: {
              'Content-Type': 'application/json' //Указываем, что отправляем JSON
            },
            body: JSON.stringify(formData) // Преобразуем объект в строку JSON
          });
  
          const result = await response.json(); // Парсим JSON-ответ от сервера
          alert(result.message); //Выводи сообщение пользователю
  
        } catch (error) {
          console.error('Ошибка отправки заказа:', error);
  
      }
    });
  }); 
  
  //-----------