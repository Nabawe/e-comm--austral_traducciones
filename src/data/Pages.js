// import Categories from './Categories.js'
const Categories = {
    'Interpretación':     { color:   'indigo',    route:'/category/interpretation' },
    'Traducción':         { color:   'teal',      route:'/category/translation' },
    'Doblaje':            { color:   'yellow',    route:'/category/dub' }
};

const keys = Object.keys( Categories );
// const routes = { ...Object.keys( Categories ).route }
console.log( keys );
const Cats = [];

for ( let k = 0, len = keys.length ; k < len ; k++ ) {
    Cats[k] = {};
    Cats[k].name = keys[k];
    Cats[k].route = Categories[ keys[k] ].route;
}

const Pages = [
    { name: 'Contacto', route: '/contact' },
    ...Cats
];
    // category...Object.keys( Categories )
    // [ 'doblaje',             'yellow' ],
    // [ 'interpretación',      'indigo' ],
    // [ 'traducción',          'teal' ]

// export default Pages;

console.log( Pages );
