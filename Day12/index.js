const express = require('express');
const path = require('path');
const { title } = require('process');
const app = express();
const port = 5000;

const home = require('./src/view/function/home');
const contact = require('./src/view/function/contact');
const GetMyproject = require('./src/view/function/GetMyproject');
const myprojectDetail = require('./src/view/function/myprojectDetail');
const PostMyproject = require('./src/view/function/PostMyproject');
const updateproject = require('./src/view/function/updateproject');
const testimonial = require('./src/view/function/testimonial');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/view'));

app.use('/assets', express.static(path.join(__dirname, 'src/assets')));
app.use(express.urlencoded({ extended: false }));

app.get('/', home);
app.get('/contact', contact);
app.get('/myproject', GetMyproject);
app.post('/myproject', PostMyproject);
app.get('/updateproject', updateproject);
app.get('/myproject-detail/:id', myprojectDetail);
app.get('/testimonial', testimonial);

app.listen(port, () => {
  console.log(`Server Listening at ${port}....`);
});
