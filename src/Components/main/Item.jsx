import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ItemCounter from './ItemCounter.jsx';

export default function Item( { id, name, price, currency, priceUnit, cat, stock, min, pic, picAlt, desc } ) {


    return (
        <>
            <Card key={ id } sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151, height: 200 }}
                    image={ pic }
                    alt={ picAlt }
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h7">
                            { name }
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            { desc }
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary" component="div">
                            ${ price }({ currency }) / { priceUnit}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <ItemCounter min={ min } stock={ stock } />
                    </Box>
                </Box>
            </Card>
        </>
    );
};
