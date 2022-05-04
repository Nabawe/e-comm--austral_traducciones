import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import f_fetchPacks from '../../../utils/f_fetchPacks.js';
import Packs from '../../../data/Packs_500.json';
import ItemList from './ItemList.jsx';


export default function ItemListContainer() {
    const [ data,               setData ]               = useState( [] );
    const [ fetchWitness,       setFetchWitness ]       = useState( true );
    const [ finishedLoading,    setFinishedLoading ]    = useState( false );
    const { categoryId } = useParams();

    console.log( categoryId );

    useEffect( () => {
        f_fetchPacks( 500, Packs, 0, 20, categoryId ) /* Cambiar a 2000ms */
            .then( result => {
                setData( result );
                console.log( result );
                setFinishedLoading( true );
                setFetchWitness( true ); /* Esta Linea es necesaria? */
            } )
            .catch( error => {
                console.log( "Error: ", error );
                setFetchWitness( false );
            } );
            // .finally( () => {
                /* Si la data no fue recibida y no hubo error como actual?
                Mostrar data vieja? Mostrar Esqueleto?
                Asumir q hubo error?*/
            // });
    // },  [ data ] );
    /*
        Esto haria q el useEffect se dispare como undefined ya q la promesa se tiene q resolver para setear data, aunque si no entiendo mal tendria q ser [[]] ya q data inicia como un array vacio y por ende no undefined...
    */
    },  [categoryId] );


    return (
        /* Hay forma de usar 1 sola variable y hacer algo tipo un case o if o else if o usar un array con las distintas condiciones ya q creo q deja mucho espacio a error esta forma */
        ( fetchWitness ) ?
            ( finishedLoading ) ?
                <ItemList packs={ data }/>
            :
                <p> Agregar Loading Bar or Spinner or Skeleton ... </p>
        :
            <p> Display ErrorLoadingPacks Component </p>
    );
};
