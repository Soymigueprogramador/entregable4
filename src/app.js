const express = require('express');
const handlebars = require('express-handlebars');
const port = 3000;
const app = express();

app.engine('handlebars', engine());
app.set('vistas engine', 'handlebars');
app.set('vistas', path.join(__dirname, '/vistas'));

app.get('/', (req, res) => {
    res.send('arrancando en el puerto ${port}'); 
})