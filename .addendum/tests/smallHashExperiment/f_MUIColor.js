import * as MUIColors from '@mui/material/colors';
const Shadow = { ...MUIColors };
delete Shadow[ 'common' ];

// ! WIP hacer q pueda recibir colores a excluir o elegir un rango de colores
export default function f_MUIColor( ...elem ) {
    let Colors = { ...Shadow };
    // delete Colors[ 'common' ];
    const Output = {};

    for ( const el of elem ) {
        const key = Object.keys( Colors )[0];
        // const key = Object.keys( Colors )[0];
        // const color = { [ key ]: Colors[ key ] };
        // Output['ü']['teal'][200]
        Output[el] = Colors[ key ];
        delete Colors[ key ];
        if ( Object.keys( Colors ).length < 1 )
            Colors = { ...Shadow };
    };

    return Output;
};

// Tests
const asd = f_MUIColor(
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y',
    'z', 'á', 'é', 'í', 'ó',
    'ú', 'ñ', 'ä', 'ë', 'ï',
    'ö', 'ü'
);

console.log( asd['ü'][200] );
console.log( asd );
