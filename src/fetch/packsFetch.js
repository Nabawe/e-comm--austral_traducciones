let TestWitness = true;

export default function packsFetch( time, data ) {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            if ( TestWitness ) {
                resolve( data );
            } else {
                reject( "Failed" );
            };
        } );
    }, time );
};
