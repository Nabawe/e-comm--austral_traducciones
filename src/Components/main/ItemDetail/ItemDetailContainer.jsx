import { useState, useEffect } from 'react';

import f_fetchItem from '../../../utils/f_fetchItem.js';
import Packs from '../../../data/Packs_500.json';
import ItemDetailPopper from './ItemDetailPopper.jsx';


export default function ItemDetailContainer( { itm } ) {
    const [ data, setData ] = useState( [] );

    useEffect( () => {
        f_fetchItem( 500, Packs, '9b2b1f8a-023c-4740-9e0e-859acda15c6b' ) /* Cambiar a 2000 */
            .then( result => { setData( result ) } )
            .catch( error => { console.log( "Error: ", error ) } );
    // },  [ data ] );
    /*
        Esto haria q el useEffect se dispare como undefined ya q la promesa se tiene q resolver para setear data, aunque si no entiendo mal tendria q ser [[]] ya q data inicia como un array vacio y por ende no undefined...
    */
    },  [] );

    return (
            // <ItemDetailPopper itm={ data } />
            <ItemDetailPopper itm={ itm } />
    );
};
