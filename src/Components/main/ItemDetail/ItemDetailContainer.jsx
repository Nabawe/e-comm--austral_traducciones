import { useState, useEffect } from 'react';

import f_fetchPacks from '../../../fetch/f_fetchPacks.js';
import packs from '../../../data/packs_500.json';
import ItemDetail from './ItemDetail.jsx';


export default function ItemDetailContainer() {
    const[ data, setData ] = useState( [] );

    useEffect( () => {
        f_fetchPacks( 2000, packs )
            .then( result => { setData( result ) } )
            .catch( error => { console.log( "Error: ", error ) } );
    },  [ data ] );


    return (
        <>
            { !!( data[2] ) && <ItemDetail i={ data[2] } /> }
        </>
    );
};
