import { useEffect, useState } from 'react';

import f_fetchPacks from '../../../fetch/f_fetchPacks.js';
import packs from '../../../data/packs.js';
import ItemList from './ItemList.jsx';


export default function ItemListContainer() {
    const[ data, setData ] = useState( [] );

    useEffect( () => {
        f_fetchPacks( 2000, packs )
            .then( result => setData( result ) )
            .catch( error => console.log( "Error: ", error ) );
    },  [ data ] );

    return (
        <>
            <ItemList packs={ data }/>
        </>
    );
};
