import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


export default function TestFirebaseItem() {

    const [ producto, setProducto ] = useState( {} );

    useEffect( ()=> {
        const db = getFirestore();

        const perritoRef = doc( db, 'productos', "oihqwolrfihql3t2");

        getDoc( perritoRef ).then( (res) => {
            setProducto( { id: res.id, ...res.data() } );
        });
    }, []);

    return (
        <>
            { producto.id ? <div> { producto.id + " " + producto.name } </div> : 'Loading...' }
        </>
    );
};
