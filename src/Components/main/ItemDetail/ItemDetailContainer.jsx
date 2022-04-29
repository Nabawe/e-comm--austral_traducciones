import { useState, useEffect } from 'react';

import f_fetchPacks from '../../../utils/f_fetchPacks.js';
import Packs from '../../../data/Packs_500.json';
import ItemDetailPopper from './ItemDetailPopper.jsx';


export default function ItemDetailContainer() {
    const [ data, setData ] = useState( [] );

    useEffect( () => {
        f_fetchPacks( 500, Packs, 1, 2 ) /* Cambiar a 2000 */
            .then( result => { setData( result ) } )
            .catch( error => { console.log( "Error: ", error ) } );
    // },  [ data ] );
    /*
        Esto haria q el useEffect se dispare como undefined ya q la promesa se tiene q resolver para setear data, aunque si no entiendo mal tendria q ser [[]] ya q data inicia como un array vacio y por ende no undefined...
    */
    },  [] );

    return (
            <ItemDetailPopper itm={ data[0] } />
    );
};
