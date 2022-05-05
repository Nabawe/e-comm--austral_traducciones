import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Popper from '@mui/material/Popper';
import Grow from '@mui/material/Grow';

import ItemDetail from './ItemDetail.jsx';
import msg from './ItemDetailPopper.msg';


export default function ItemDetailPopper( { itm } ) {
    const [ anchorEl, setAnchorEl]  = useState( null );
    const [ open, setOpen ] = useState( false );
    const id = open ? 'simple-popper' : undefined;

    let navigate = useNavigate();

    const handleClick = ( evt ) => {
        setAnchorEl( evt.currentTarget );
        setOpen( open ? false : true );
        navigate( `/item/${ itm.id }` ); // Necesito manipular el path con el import de Paths, al menos la parte de item para q sea consistente en todos lados, y ver si agregar la category
        // probar ./itemId
    };

    const handleClickAway = () => {
        setOpen( false );
    };

    return (
        <ClickAwayListener onClickAway={ handleClickAway }>
            <Box>
                <Button aria-describedby={ id } variant="outlined" onClick= { handleClick }>
                    { msg.showDetail }
                </Button>
                    { open ? (
                        <Popper id={ id } open={ open } anchorEl={ anchorEl } transition>
                            {( { TransitionProps } ) => (
                                <Grow {...TransitionProps} timeout={350}>
                                    <Box>
                                        { ( itm ) && <ItemDetail itm={ itm } /> }
                                    </Box>
                                </Grow>
                            )}
                        </Popper>
                    ) : null }
            </Box>
        </ClickAwayListener>
    );
};
