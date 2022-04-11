import { useEffect, useState } from 'react';
import packsFetch from '../../fetch/packsFetch.js';
import packs from '../../data/packs.js';
import ItemList from './ItemList.jsx';

export default function ItemListContainer() {
    const[ data, setData ] = useState( [] );

    useEffect( () => {
        packsFetch( 2000, packs )
        .then( result => setData( result ) )
        .catch( error => console.log( error ) );
    },  [ data ] );

    return (
        <>
            <ItemList packs={ data }/>
        </>
    );
};
