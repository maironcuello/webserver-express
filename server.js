const express = require('express');

const app = express();
const hbs = require('hbs');

/*Para desplegar en Heroku */
const port = process.env.PORT || 3000;

/**Migdelaware   */
app.use(express.static(__dirname + '/public'));

/**Express HBS engine */
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs'); /* Para renderizar págibas webs */

app.get('/', (req, res) => { res.render('home'); });
app.get('/about', (req, res) => res.render('about'));

app.listen(port), console.log(`Servidor corriendo en puerto ${port}`);