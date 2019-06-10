// подключили созданный нами модуль ./ говорит о подключении локального модуля 
// ../ - если хотим подняться на каталог выше
// запись ниже не очень хорошая. Можно создать общий модуль в папке моделей, куда мы импортируем все наши модели 
//const Task = require('./models/task');
//const User = require('./models/user');

/*деструктуризация, если экспортируется много сущностей
const {Task, name} = require('./models/task');
*/

//После создаия index.js в директории models, я могу вытаскивать нужную мне модель:
const {Task, User} = require('./models/index');

// для работы с mongoDb из Node.JS очень удобно использовать пакет, который называется mongoose
const mongoose = require('mongoose');
//mongodb://url/база
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/users', async (request, response) => {
  const user = await User.find();
  //дальше можно отрендерить или в json
  response.json(user);
})

app.get('/users/:id', async (request, response) => {
  const user = await User.findById(request.params.id);
  //дальше можно отрендерить или в json формате всё получить
  response.json(user);
})

app.post('/users/add', async (request, response) => {
  let user = new User (request.body)
  user = await user.save();
  //дальше можно отрендерить или в json формате всё получить
  response.json(user);
})

app.listen(8888);