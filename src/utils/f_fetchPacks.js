let MockResult = true;

export default function f_fetchPacks( time, data, ini, end ) {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            if ( MockResult ) {
                resolve( data.slice( ini, end ) );
            } else {
                reject( "Failed" );
            };
        },  time );
    } );
};

// In a real case the backend should be tasked with limiting the results that are sent.
/* Es como si fuera una función con más de un return, resolve para caso positivo reject negativo, no se si tiene otros aparte del return normal */
