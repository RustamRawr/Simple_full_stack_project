console.log('World');

//npm i express --save
//npm config set proxy http://192.xxx.x.xx:3128
//npm config set https-proxy http://192.xxx.x.xx:3128
//npm config set syrict-ssl false
//npm init (инициализируем проект через cmd)
//npm config delete https-proxy
//npm config delete proxy
//node --watch server.js  - команда запускает сервер и автоматически его обновляет 
// http://localhost:3000/cookies/3 -- для вывода второго гет 
//проверка серверной части post: curl -X POST http://localhost:3000/order -H "Content-Type: application/json" -d '{"cookie": "Шоколадное"}'
//{"status":"успешно","message":"Ваш заказ принят"}

// const - тип переменной, которая не может быть изменена 
// const mass = [] - массив 

//---------- Подключение и настройка Express
const express = require('express');
const path = require('path') //Подключаем установленную библиотеку Express для создания сервера
const app = express(); //Инициализируем сервер с помощью Express
const port = 3000; //Порт сервера, на котором сервер будет слушать запросы
//-----------
app.use(express.static(path.join(__dirname, 'public')));

// Массив с данными о печеньках (При создании второго get добавляем id, чтоб обращаться к определённому печенью)
const cookies = [
  { id: 1, name: 'Лучшие друзья', price: 20, weight: '200 гр', description: 'С шоколадной крошкой и грецкими орехами' },
  { id: 2, name: 'Карамельный рай', price: 25, weight: '180 гр', description: 'Сладкий вкус карамели и меда' },
  { id: 3, name: 'Ореховый хруст', price: 22, weight: '220 гр', description: 'Хрустящий с орехами' },
  { id: 4, name: 'Классическое', price: 15, weight: '150 гр', description: 'Простое и вкусное' },
  { id: 5, name: 'Двойной шоколад', price: 30, weight: '210 гр', description: 'Для любителей шоколада' },
  { id: 6, name: 'Ванильное чудо', price: 18, weight: '190 гр', description: 'С ароматной ванилью' }
];

// Маршрут для получения всех видов печеньев (первый гет)
app.get('/cookies', (req, res) => {
  res.json(cookies);
});

// Маршрут для вывода печенья по его id (второй гет)
app.get('/cookies/:id', (req, res) => {
  const cookieId = parseInt (req.params.id); // Получаем id из URL-адреса и возвращаем его в виде числа 
  const cookie = cookies.find(c => c.id === cookieId); // Ищем печенье по id

  if (cookie) {
    res.json(cookie); // Если нашли печенье, то отправляем его
  } else {
    res.status(404).json({ message: 'Печенье не найдено'}); // Если печенье не нашли, то отправляем ошибку 404 (запрашиваемая страница не найдена)
  }
});


//----------- Серверная часть Post 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/order', (req, res) => {
  const formData = req.body; //Получаем данные из запроса

  console.log('Получен заказ:', formData); //Выводим в консоль подтверждение получения запроса
//сохранить в бд (в виде джейсон файла)
  //Отправка клиенту ответа
  res.json({
    status: 'успешно',
    message: 'Ваш заказ принят! 🎉'
  });
});
//-----------


//----------- Запуск сервера
app.listen(port, () => {   // Непосредственно app.listen отвечает за запуск сервера
  console.log(`Сервер запущен на http://localhost:${port}`);
});
//-----------
//http://localhost:5000/
