const express = require('express');
const app = express();

// Обработка GET-запроса
app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

// Установка порта для сервера
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
