import React, { useEffect, useState } from "react";
import Test from "../../Components/Test/Test";

export default function TestContainer() {

    const [ universidades, setUniversidades ] = useState([]);

    useEffect( () => {
        // const raw = "";

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        /* Puede q sea neceasrio sacar el body y raw ya q get es para traer info, en especial en esta API */
        // body: raw,

        fetch( "http://universities.hipolabs.com/search?country=United+States&cant=100", requestOptions )
        .then( response => response.json() )
        .then( result => {
            setUniversidades( result )
        } )
        .catch( error => console.log( 'error', error ) );
    }, [] );

    /* El fetch necesita 2 then
        2018 - Dice q fetch te devuelve un objeto con una promesa por eso hay q esperarlo 2 veces.
    */

    return (
        <>
            <Test univeridades={ universidades } />
        </>
    );
};



