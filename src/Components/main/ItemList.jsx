import Stack from '@mui/material/Stack';

import Item from './Item.jsx';

export default function ItemList( { packs } ) {
    return (

            <Stack
            spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                {
                    packs.map( p => (
                        <Item
                            key={p.id}
                            name={p.name}
                            price={p.price}
                            currency={p.currency}
                            priceUnit={p.priceUnit}
                            cat={p.cat}
                            stock={p.stock}
                            min={p.min}
                            pic={p.pic}
                            picAlt={p.picAlt}
                            desc={p.desc}
                        />
                    ) )
                }
            </Stack>
    );
};
