//общий модуль, чтобы не импортировать каждый модуль в отдельности в наши контроллеры. Маппинг
const Task = require('./task');
const User = require('./user');

module.exports = {Task, User};
//Как очень просто и быстро раскатать у себя любую субд, не устанавливая её  - докер
// Всё что нужно - это специальный софт Kitematic (kitematic.com) - часть docker toolbox
// нужно зайти на сайт и скачать Docker Toolbox. Установится и docker и kitematic.
// Kitematic не будет работать без запущенного докера