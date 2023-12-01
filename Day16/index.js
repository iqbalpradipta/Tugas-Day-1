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

const home = require('./src/view/function/home');
const deleteList = require('./src/view/function/deleteList');
const contact = require('./src/view/function/contact');
const GetMyproject = require('./src/view/function/GetMyproject');
const myprojectDetail = require('./src/view/function/myprojectDetail');
const PostMyproject = require('./src/view/function/PostMyproject');
const updateproject = require('./src/view/function/updateproject');
const updateprojects = require('./src/view/function/updateprojects');
const testimonial = require('./src/view/function/testimonial');
const loginViews = require('./src/view/function/loginViews');
const registerViews = require('./src/view/function/registerViews');
const register = require('./src/view/function/register');
const login = require('./src/view/function/login');
const logout = require('./src/view/function/logout');
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
