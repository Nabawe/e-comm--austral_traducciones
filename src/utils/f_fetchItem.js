let MockResult = true;
/**
 * Fetches an Item by its Id, a search range is optionally specified
 * @param {JSON} data JSON formated data.
 * @param {String} id Item Id.
 * @param {Number} [ini] search start index ( Array.prototype.slice() ).
 * @param {Number} [end] search end index ( Array.prototype.slice() ).
 * @returns {Object} Item Object.
 * */
export default function f_fetchItem( delay, data, id, ini, end ) {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            if ( MockResult ) {
                resolve( data.slice( ini, end ).find( elem => elem.id === id ) );
                // agregar si no encuentra resultado
            } else {
                reject( "Failed" );
            };
        },  delay );
    } );
};
