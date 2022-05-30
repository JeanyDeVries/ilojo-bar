// Requires
const express = require('express');
const hbs  = require('express-handlebars');
const handlebars = hbs.engine;
const compression = require('compression')
const fetch = require('node-fetch')

require('dotenv').config()

//Variabelen
const app = express();
const apiKey = process.env.APIKEY;
const port = process.env.PORT || 3000;

// Compress alle responses
app.use(compression())

// Aangeven waar onze statishce files zich bevinden  
app.use(express.static('static'));


// Templating engine
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');


//Routing
app.get('/', (req, res) => {
    res.render('home', {
        title: 'home'})
});

app.get('/detail/:id', (req, res) => {
    res.render('detail', {
        title: 'home'})
})

// Set server
app.listen(port, () => {
    console.log(`Gebruikte poort:${port}!`)
});