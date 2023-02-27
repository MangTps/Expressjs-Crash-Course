const path = require('path');
const express = require('express');
const {engine} = require('express-handlebars');
const app = express();
const restaurantRouter = require('./routes/restaurant');
const logger = require('./middleware/logger');
const indexRouter = require('./routes');


//Template engines
app.engine('hbs', engine({ extname: 'hbs' }));
app.set('view engine','hbs');
//Middle ware
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Custom middleware
app.use(logger);
//Routes
app.use('/apis/restaurant', restaurantRouter);
app.use('/',indexRouter);

app.listen(3000, ()=>{
    console.log('Listening to port 3000');
});
//RESTful API
//REpresentational State Transfer ไกด์ไลน์ในการสร้าง API(CRUD) ผ่าน http 
//CRUD Create Read Update Delete RESTful API POST GET PUT DELETE;

//Request
//req.params
//req.query
//req.body

//Response
//res.send()
//res.sendFile()
//res.sendStatus()
//res.json() ส่งข้อมูล json 
