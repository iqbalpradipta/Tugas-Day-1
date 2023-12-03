const express = require('express');
const path = require('path');
const { title } = require('process');
const app = express();
const port = 5500;
const config = require('./src/config/config.json');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(config.development);
const session = require('express-session');
const flash = require('express-flash');

const home = require('./src/function/home');
const deleteList = require('./src/function/deleteList');
const contact = require('./src/function/contact');
const GetMyproject = require('./src/function/GetMyproject');
const myprojectDetail = require('./src/function/myprojectDetail');
const PostMyproject = require('./src/function/PostMyproject');
const updateproject = require('./src/function/updateproject');
const updateprojects = require('./src/function/updateprojects');
const testimonial = require('./src/function/testimonial');
const loginViews = require('./src/function/loginViews');
const registerViews = require('./src/function/registerViews');
const register = require('./src/function/register');
const login = require('./src/function/login');
const logout = require('./src/function/logout');
const upload = require('./src/middlewares/uploadFile')

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/view'));

app.use('/assets', express.static(path.join(__dirname, 'src/assets')));
app.use('/uploads', express.static(path.join(__dirname, 'src/uploads')));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'k0ch3n9m3T4L',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 },
  })
);

app.use(flash());

app.get('/', home);
app.get('/deleteList/:id', deleteList);

app.get('/contact', contact);


app.get('/myproject', GetMyproject);
app.post('/myproject', upload.single("image") ,PostMyproject);

app.get('/updateproject/:id', updateprojects);
app.post('/updateproject', upload.single("image") ,updateproject);
app.get('/myproject-detail/:id', myprojectDetail);
app.get('/testimonial', testimonial);

app.get('/login', loginViews);
app.post('/login', login);
app.get('/register', registerViews);
app.post('/register', register);
app.get('/logout', logout);

app.listen(port, () => {
  console.log(`Server Listening at ${port}....`);
});
