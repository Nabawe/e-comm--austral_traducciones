// MUI Imports
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function WidgetCart() {
    return (
        <>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </>
    );
};



