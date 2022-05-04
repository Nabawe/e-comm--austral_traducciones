let MockResult = true;
/**
 * Fetches Packs, optionally a catogry filter or a return range are specified
 * @param {JSON} data JSON formated data.
 * @param {Number} [ini] returned filtered array start index ( Array.prototype.slice() ).
 * @param {Number} [end] returned filtered arrayend index ( Array.prototype.slice() ).
 * @param {String} [categoryFilter] an optinal category filter.
 * @returns {Array} An Array of Packs.
 * */
export default function f_fetchPacks( delay, data, ini, end, categoryFilter ) {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            if ( MockResult ) {
                categoryFilter ?
                    resolve( data.filter( elem => elem.cat === categoryFilter ).slice( ini, end ) )
                    // agregar si no encuentra resultado
                :
                    resolve( data.slice( ini, end ) )
                ;
            } else {
                reject( "Failed" );
            };
        },  delay );
    } );
};

// In a real case the backend should be tasked with limiting the results that are sent.
/* Es como si fuera una función con más de un return, resolve para caso positivo reject negativo, no se si tiene otros aparte del return normal */

/* Al aplicar el filter va a haber q decidir si es q se aplica alos primeros X resultados o si primero aplica y luego reduce resultados, coder ambos... ver q pasa si no se le pasan criterios a .filter */

/* Descarte pasar parametros con destructuring ya q van a ser solo 4, en todo caso completar la Doc String para ver la desc de los parametros */
