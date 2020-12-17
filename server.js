const express = require('express');

const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

/*Para desplegar en Heroku */
const port = process.env.PORT || 3000;
/**Migdelaware   */
app.use(express.static(__dirname + '/public')); /* Migdelware*/

/**Express HBS engine */
hbs.registerPartials(__dirname + '/views/parciales'); /* migdelware Compartir carpeta */
app.set('view engine', 'hbs'); /* Configuración para renderizar págibas webs */

app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'));

app.listen(port), console.log(`Servidor corriendo en puerto ${port}`);