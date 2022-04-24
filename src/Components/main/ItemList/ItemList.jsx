import Stack from '@mui/material/Stack';

import Item from '../Item.jsx';


export default function ItemList( { packs } ) {
    return (

        <Stack
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{ width: '90%'}}
        >
            {
                packs.map( p => ( <Item key={ p.id } i={ p } /> ) )
            }
        </Stack>
    );
};
