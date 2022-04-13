let MockResult = true;

export default function f_fetchPacks( time, data ) {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            if ( MockResult ) {
                resolve( data );
            } else {
                reject( "Failed" );
            };
        },  time );
    } );
};
