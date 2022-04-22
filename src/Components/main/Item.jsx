import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ItemCounter from './ItemCounter.jsx';


// export default function Item( { id, name, price, currency, priceUnit, cat, stock, min, pic, picAlt, desc } ) {
// ! WIP - Me falta usar cat
export default function Item( { i } ) {
    return (
        <>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151, height: 200 }}
                    image={ i.pic }
                    alt={ i.picAlt }
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h7">
                            { i.name }
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            { i.desc }
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary" component="div">
                            ${ i.price }({ i.currency }) / { i.priceUnit}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <ItemCounter min={ i.min } stock={ i.stock } />
                    </Box>
                </Box>
            </Card>
        </>
    );
};
