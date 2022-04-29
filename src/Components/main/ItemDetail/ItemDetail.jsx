import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as MUIColors from '@mui/material/colors';

import ItemCounter from '../ItemCounter.jsx';
import CategoriesColors from '../../../data/CategoriesColors.js';


// export default function Item( { id, name, price, currency, priceUnit, cat, stock, min, pic, picAlt, desc_short, desc_long } ) {
export default function ItemDetail( { itm } ) {
    return (
        <Card sx={{ display: 'flex', width: 1000, height: 300, alignItems: 'center' }}>
            <CardMedia
                component="img"
                sx={{ width: 200, height: 300 }}
                image={ itm.pic }
                alt={ itm.picAlt }
            />
            <Typography
                component="div"
                variant="overline"
                /* ! WIP deberia ser sideways-lr */
                sx={{
                    height: '100%',
                    textAlign: 'center',
                    writingMode: 'vertical-lr',
                    transform: 'rotate(-180deg)',
                    bgcolor: MUIColors[ CategoriesColors.get( itm.cat ) ][200]
                }}
            >
                { itm.cat }
            </Typography>
            {/* WIP Deberia ser justifyContent: 'space-between' */}
            <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 7 }}>
                <CardContent sx={{ flex: '1 0 auto' }}> {/* Creo q el sx no afecta */}
                    <Typography component="div" variant="h7">
                        { itm.name }
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        { itm.desc_long }
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div"
                        sx={{ mt: 3}}
                    >
                        ${ itm.price }({ itm.currency }) / { itm.priceUnit}
                    </Typography>
                </CardContent>
                <Box sx={{ pb: 1, pl: 1 }}>
                    <ItemCounter min={ itm.min } stock={ itm.stock } />
                </Box>
            </Box>
        </Card>
    );
};
