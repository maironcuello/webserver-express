const hbs = require("hbs");

const hbs = require('hbs');

/**Helpers */

/*Devuelve el año en curso */
hbs.registerHelper('getAnio', () => new Date().getFullYear());


/*Coloca primera letra ed un texto en Mayusculas */
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.array.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowUpperCase();
    });
    return palabras.join(' ');
});

/* Devuelve el nombre*/
hbs.registerHelper('getNombre', () => capitalizar('mairon jAvieR cuEllO'));