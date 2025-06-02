# Simple_full_stack_project
В данном проекте я создал небольшой одностраничный сайт, который предпологается использовать как магазин, доставляющий печенье. Также было положено начало созданию клиент-серверной части с использованием Node.js и Express.js

---
## Установка express и сохранение в dependencies
npm i express --save
---

# Настройка HTTP-прокси (для работы через локальный или корпоративный прокси-сервер)
npm config set proxy http://192.xxx.x.xx:3128

# Настройка HTTPS-прокси (для защищённых соединений через прокси)
npm config set https-proxy http://192.xxx.x.xx:3128

# Отключение строгой проверки SSL (если возникают ошибки SSL через прокси)
npm config set strict-ssl false

# Инициализация нового Node.js-проекта (создание package.json)
npm init

# Удаление настроек HTTPS-прокси
npm config delete https-proxy

# Удаление настроек HTTP-прокси
npm config delete proxy

# Запуск сервера с автообновлением при изменении файлов (доступно с Node.js 18.11+)
node --watch server.js

# GET-запрос по маршруту /cookies/3:
GET http://localhost:3000/cookies/3

# POST-запрос с JSON-телом (проверка серверной части):
curl -X POST http://localhost:3000/order -H "Content-Type: application/json" -d '{"cookie": "Шоколадное"}'

# Ожидаемый ответ:
{
  "status": "успешно",
  "message": "Ваш заказ принят"
}

