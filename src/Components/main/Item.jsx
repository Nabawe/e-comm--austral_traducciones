import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as MUIColors from '@mui/material/colors';
import Image from 'mui-image';

import Categories from '../../data/Categories.js';
import ItemCounter from './ItemCounter.jsx';
import ItemDetailContainer from './ItemDetail/ItemDetailContainer.jsx';

// export default function Item( { id, name, price, currency, priceUnit, cat, stock, min, pic, picAlt, desc_short, desc_long } ) {
export default function Item( { itm } ) {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate( Categories[itm.cat].route );
    };

    return (
        <Card sx={{ width: '100%', height: 151, display: 'flex', alignItems: 'center' }}>
            <Image
                /* Originalmente eran 200 y 300 lo dividi a la mitad y agregue 1 de altura ya q sino quedaba un borde blanco debajo, y cambiar la alineacion o agregar margen era peor, creo q la unidad no son pixeles */
                // sx={{ width: 100, height: '100%' }}
                width='100px'
                height='100%'
                duration={1000}
                // easing="ease-in-out" // Cool Try to remember it , https://easings.net/
                src={ itm.pic }
                alt={ itm.picAlt }
            />
            <Typography
                component="div"
                variant="overline"
                onClick={ handleClick }
                /* ! WIP deberia ser sideways-lr */
                sx={{
                    height: '100%',
                    textAlign: 'center',
                    writingMode: 'vertical-lr',
                    transform: 'rotate(-180deg)',
                    color: MUIColors.common.white,
                    bgcolor: MUIColors[Categories[itm.cat].color][200],
                    cursor: 'pointer'
                }}
            >
                { Categories[itm.cat].label }
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: '-15px', gap: '20px' }}> {/* Problemas de alineación */}
                <CardContent sx={{ flex: '1 0 auto' }}> {/* Creo q el sx no afecta */}
                    <Typography component="div" variant="h6">
                        { itm.name }
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        { itm.desc_short }
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        ${ itm.price }({ itm.currency }) / { itm.priceUnit}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', pl: 1 }}>
                    <ItemCounter min={ itm.min } stock={ itm.stock } />
                    <ItemDetailContainer itm={ itm } /> {/* Aqui iria un link q dispara el componente correcto usando rutas o algo así */}
                </Box>
            </Box>
        </Card>
    );
};
