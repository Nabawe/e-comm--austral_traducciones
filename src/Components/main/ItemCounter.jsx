import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import g_Styles from "../../style/g_Styles.js";
import msg from './ItemCounter.msg.js'


export default function ItemCounter( { min, stock } ) {
    const [isOutOfStock, setIsOutOfStock] = useState( false );
    const [qty, setQty] = useState( ( stock < min ? stock : min ) );

    useEffect( () => {
        ( qty >= min ) ?
            setIsOutOfStock( false )
            :
            setIsOutOfStock( true );
    }, [ qty, min ] ); /* Porque necesito agregar min? */

    const add = () => {
        if ( qty < stock )
            setQty( qty + 1 );
    };

    const sub = () => {
        if ( qty < min ) /* ! Esto no se debería cumplir vez alguna ya q esta isOutOfStock */
            return alert( msg.onOutOfStock );
        if ( qty > min )
            setQty( qty - 1 );
    };

    const clr = () => {
        setQty( min );
    };

    const onAdd = () => {
        if ( qty )
            alert( qty + msg.onAdd );
    };

    return (
        <>
            <Box sx={{ bgcolor: g_Styles.colors.bg_c }}>
                <ButtonGroup variant="outlined" aria-label="outlined button group" disabled={ isOutOfStock }>
                    <Button onClick={ sub }>-</Button>
                    <Button onClick={ clr }>{ qty }</Button>
                    <Button onClick={ add }>+</Button>
                </ButtonGroup>
                <Button disabled={ isOutOfStock } onClick={ onAdd }>{ isOutOfStock ? msg.outOfStock : msg.addToCart }</Button>
            </Box>
        </>
    );
};
