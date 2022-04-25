import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';

import f_fetchPacks from '../../../fetch/f_fetchPacks.js';
import packs from '../../../data/packs_500.json';
import ItemDetail from './ItemDetail.jsx';


export default function ItemDetailContainer() {
    const [ data, setData ] = useState( [] );

    // El desafio pide q devuelva un producto
    // Conciderar hacer otro componente para el popper
    useEffect( () => {
        f_fetchPacks( 50, packs ) /* Cambiar a 2000 */
            .then( result => { setData( result ) } )
            .catch( error => { console.log( "Error: ", error ) } );
    },  [ data ] );

    // MUI Popper and ClickAwayListener
    const [ anchorEl, setAnchorEl]  = useState( null );
    const [ open, setOpen ] = useState( false );
    const id = open ? 'simple-popper' : undefined;

    const handleClick = ( event ) => {
        setAnchorEl( event.currentTarget );
        setOpen( open ? false : true );
    };

    const handleClickAway = () => {
        setOpen( false );
    };

    return (
        <>
            <ClickAwayListener onClickAway={ handleClickAway }>
                <Box>
                    <Button aria-describedby={ id } variant="outlined" onClick= { handleClick }>
                        Toggle Popper
                    </Button>
                        { open ? (
                            <Popper id={ id } open={ open } anchorEl={ anchorEl } transition>
                                {( { TransitionProps } ) => (
                                    <Grow {...TransitionProps} timeout={350}>
                                        <Box>
                                            { !!( data[2] ) && <ItemDetail i={ data[2] } /> }
                                        </Box>
                                    </Grow>
                                )}
                            </Popper>
                        ) : null }
                </Box>
            </ClickAwayListener>
        </>
    );
};
