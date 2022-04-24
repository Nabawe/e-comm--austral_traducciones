import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Item from '../main/Item';


export default function TestFirebaseCollection() {

    const [ productos, setProductos ] = useState( [] );
        // Es un array vacio

    useEffect( ()=> {
        const db = getFirestore();

        const productosRef = collection( db, 'productos');

        getDocs( productosRef ).then( (res) => {
            // console.log( res.docs );
            setProductos( res.docs.map( item => ( {id: Item.id, ...item.data() } ) ) );
            // Dice q si coloco un consol log aqui no se va a ver por un retardo en ReactJS
            // Por eso hacerlo con un useEffect para debugear

            // let productos = [ ...res.docs ];
            // productos = productos.map( item => ( { id: item.id, ...item.data() }));
            // setProductos( productos );
        });

    }, []);

    useEffect( () => {
        console.log( productos );
    }, [productos]);

    return (
        <>
            {/* NO USAR .length ya q puede causar multiples bugs, lo q se busca es preguntar correctamente si se cargo */}
            { productos.length ? <div> { JSON.stringify( productos ) } </div> : 'Loading...' }
        </>
    );
};
