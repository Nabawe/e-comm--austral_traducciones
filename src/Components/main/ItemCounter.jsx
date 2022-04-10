import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import style from "../../style/style.js";
import msg from './ItemCounter.msg.js'

export default function ItemCounter( { min, stock } ) {
    const [qty, setQty] = useState( min );

    const add = () => {
        if ( qty < stock )
            setQty( qty + 1 );
    };

    const sub = () => {
        if ( qty > min )
            setQty( qty - 1 );
    };

    const onAdd = () => {
        if ( qty )
            alert( qty + msg.onAdd );
    };

    return (
        <>
            <Box sx={{ bgcolor: style.colors.bg_c }}>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button onClick={ sub }>-</Button>
                    <Button>{ qty }</Button>
                    <Button onClick={ add }>+</Button>
                </ButtonGroup>
                <Button onClick={ onAdd }>{ msg.purchase }</Button>
            </Box>
        </>
    );
};
