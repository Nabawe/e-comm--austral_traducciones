// Ver f f_hashAssign

// Max Length
// Which is the lenght of the Primes Map - 1.
const M = 50;

// Index
const I = new Map( [
    [ ' ', 1 ],
    [ 'a', 2 ],
    [ 'b', 3 ],
    [ 'c', 5 ],
    [ 'd', 7 ],
    [ 'e', 11 ],
    [ 'f', 13 ],
    [ 'g', 17 ],
    [ 'h', 19 ],
    [ 'i', 23 ],
    [ 'j', 29 ],
    [ 'k', 31 ],
    [ 'l', 37 ],
    [ 'm', 41 ],
    [ 'n', 43 ],
    [ 'o', 47 ],
    [ 'p', 53 ],
    [ 'q', 59 ],
    [ 'r', 61 ],
    [ 's', 67 ],
    [ 't', 71 ],
    [ 'u', 73 ],
    [ 'v', 79 ],
    [ 'w', 83 ],
    [ 'x', 89 ],
    [ 'y', 97 ],
    [ 'z', 101 ],
    [ 'á', 103 ],
    [ 'é', 107 ],
    [ 'í', 109 ],
    [ 'ó', 113 ],
    [ 'ú', 127 ],
    [ 'ñ', 131 ],
    [ 'ä', 137 ],
    [ 'ë', 139 ],
    [ 'ï', 149 ],
    [ 'ö', 151 ],
    [ 'ü', 157]
] );

// Position Prime Map
const P = [ 1, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449 ];

// const P = [ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229 ]; // Repeating the primes for positions would cause collisions

const f = S => {
    const L = S.length;

    if ( L > M )
        return 1

    let r = 1;

    for ( let k = 1 ; k < L ; k++ )
        r *= P[k] * ( I.get( S[k] ) || 1 ) // If the character isn't on the map multiply P[k] * 1

    return r;
};

console.log( f( 'interpretation' ) );

// Como los resultados daban numeros muy grandes aun para valores pequeños decidi usar un hash clasico


// const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'á', 'é', 'í', 'ó', 'ú', 'ñ', 'ä', 'ë', 'ï', 'ö', 'ü'];
// const primes = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229 ];
// const ans = new Map();
// for ( let j = 0 ; j < abc.length ; j++ ) {
//     ans.set( abc[j], primes[j] );
// }

// console.log( abc.toLowerCase() );
// console.log( abc.split(",") );
// console.log( primes.length );


// https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
const cyrb53 = function(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1>>>0);
};

console.log( cyrb53( 'interpretation' ) );

//  El peso de las categorias se generaria en run time
const CatWeight = {
    dub: cyrb53( 'dub' ),
    interpretation: cyrb53( 'interpretation' ),
    translation: cyrb53( 'translation' )
};

const ColorWeight = {
    amber: cyrb53( 'amber' ),
    blue: cyrb53( 'blue' ),
    blueGrey: cyrb53( 'blueGrey' ),
    brown: cyrb53( 'brown' ),
    cyan: cyrb53( 'cyan' ),
    deepOrange: cyrb53( 'deepOrange' ),
    deepPurple: cyrb53( 'deepPurple' ),
    grey: cyrb53( 'grey' ),
    green: cyrb53( 'green' ),
    indigo: cyrb53( 'indigo' ),
    lightBlue: cyrb53( 'lightBlue' ),
    lightGreen: cyrb53( 'lightGreen' ),
    lime: cyrb53( 'lime' ),
    orange: cyrb53( 'orange' ),
    pink: cyrb53( 'pink' ),
    purple: cyrb53( 'purple' ),
    red: cyrb53( 'red' ),
    teal: cyrb53( 'teal' ),
    yellow: cyrb53( 'yellow' )
};

const closestColor = function( s ) {
    s = cyrb53( s );
    let result = "";
    let prev = Infinity;

    for ( const k in ColorWeight ) {
        let dist = Math.abs( s - ColorWeight[k] );
        result = ( dist < prev ? k : result );
        prev = dist;
    };

    return result;
};

console.log( closestColor( 'dub' ) );


const f_hashAssign = function( Contrast, ...strings ) {
    const Shadow = { ...Contrast };
    Contrast = { ...Contrast };
    const output = [];

    for ( const i in strings ) {
        const str = strings[ i ];
        const s = cyrb53( str );
        let result = "";
        /* De no usar Infinity tendría q Math.abs( s - Contrast[0] )
        para definir el primer caso y arrancar el for k desde el indice 1.
        O checkear en cada ejecucion si existia prev */
        let prev = Infinity;

        for ( const k in Contrast ) {
            let dist = Math.abs( s - Contrast[k] );
            result = ( dist < prev ? k : result );
            prev = dist;
        };

        output[i] = { [ str ]: result };
        /* La linea de arriba deberia ser equivalente a:
        output[i] = {};
        output[i][ str ] = result; */
        delete Contrast[ result ];
        if ( Object.keys( Contrast ).length < 1 )
            Contrast = { ...Shadow };
    };

    return output;
};

// Contrast has to have at least 1 line
console.log( f_hashAssign( ColorWeight, "interpretation", "translation", 'dub' ) );
console.log( ColorWeight );

// const { a, ...rest } = { a: 1, b: 2, c: 3 }; vs delete
// structuredClone(value)
// JSON.parse(JSON.stringify(object))
// size = Object.keys(myObj).length; vs usar un map o array de objetos

/*
    Pensar en el metodo de una tabla q se exausta
    O sea estan los colores en una tabla y a medida q se van asignando se "gastan"
    y luego se resetea la tabla al agotarse
    Me hace pensar sobre lo de tablas de cache
*/

/*
    https://stackoverflow.com/a/19837961/3170694
    In the new ES2015 standard for JavaScript (formerly called ES6), objects can be created with computed keys: Object Initializer spec.
*/

/*
    !!! Muy posiblemente tanto el hasheador como el comparador de proximidad se puedan optimizar
    Tengo entendido q se puede hacer una comparacion de usando la representacion binaria para q
    todo pase más rapido, tambien mirar:
    https://stackoverflow.com/a/8584940/3170694
        Bracketing
            https://en.wikipedia.org/wiki/Binary_search_algorithm
*/

// Redes de Informacion Entrelazadas

/* Minifier -> Tabulator -> Ponderator | Weighter -> Fingerprint Generator -> Compresser */
/* Minifier : Just like in JavaScript */
/* Trabulator : Acomoda las expresiones de una forma consistente, al estilo if localVar === primitiveValue ( like true ) */
/* El ponderador hace una pre conversion del output anterior asignando valores unicos y relevancia. Es una expresion más general de la logica pero extenciva, q permita relacionarse y hacer busquedas más precisas, largas y pesadas */
/* Fingerprint Generator lo hace pasar para intentar generar una expresion unica.*/
/* De ser muy grande la expresion anterior intentar lograr comprimirla, ver si este o la Fingerprint son suficientes para permitir hacer busquedas, relaciones de forma acelerada */


/* Uso de tecnicas de electronica para reducir la logica y tamaño de circuitos combinado con lo anterior. */


/* Luego el Engine aplica Patrones de Diseño y Arquitectura y cosas tipo Model View Controller para deglosar, clasificar y relacionar lo analizado.  */
