// опишем модель User для работы с MongoDb и импортируем mongoose и schema - 
// с помощью неё будем описывать схему наших данных (какие поля есть у нашего пользователя),
// каких они типов и т.д.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // в документации mongoose также можно посмотреть валидаторы, которые можно описать
  // валидацию можно делать с помощью регулярных выражений, с помощью функций
  name: {type: String, default: 'Ivan', required: true},
  age: {type: Number},
})

// название модели, схема, название коллекции(надо указывать - mongoose делает
// автоматическую плюрализацию, бывают ошибки)
module.exports = mongoose.model('User', userSchema, 'user');