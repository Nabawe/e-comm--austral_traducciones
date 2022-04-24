import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

import f_fetchPacks from '../../../fetch/f_fetchPacks.js';
import packs from '../../../data/packs_500.json';
import ItemDetail from './ItemDetail.jsx';


export default function ItemDetailContainer() {
    const[ data, setData ] = useState( [] );

    // El desafio pide q devuelva un producto
    // Conciderar hacer otro componente para el popper
    useEffect( () => {
        f_fetchPacks( 2000, packs )
            .then( result => { setData( result ) } )
            .catch( error => { console.log( "Error: ", error ) } );
    },  [ data ] );

    // MUI Popper Code
    const [anchorEl, setAnchorEl] = useState( null );

    const handleClick = ( event ) => {
        setAnchorEl( anchorEl ? null : event.currentTarget );
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    const arrowRef = true; /* ! WIP CHECK THIS */

    return (
        <>
            <button aria-describedby={ id } type="button" onClick={ handleClick }>
                    Toggle Popper
            </button>
            <Popper id={ id } open={ open } anchorEl={ anchorEl }
                placement="top"
                disablePortal={false}
                modifiers={[
                    {
                        name: 'flip',
                        enabled: true,
                        options: {
                            altBoundary: true,
                            rootBoundary: 'document',
                            padding: 8,
                        },
                    },
                    {
                        name: 'preventOverflow',
                        enabled: true,
                        options: {
                            altAxis: true,
                            altBoundary: true,
                            tether: true,
                            rootBoundary: 'document',
                            padding: 8,
                        },
                    },
                    {
                        name: 'arrow',
                        enabled: true,
                        options: {
                            element: arrowRef,
                        },
                    },
                ]}
            >
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                    { !!( data[2] ) && <ItemDetail i={ data[2] } /> }
                </Box>
            </Popper>
        </>
    );
};
