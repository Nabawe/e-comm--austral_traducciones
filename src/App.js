import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Container, Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import './App.css';

import CssBaseline from '@mui/material/CssBaseline';

import ItemDetailContainer from "./Components/main/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./Components/main/ItemList/ItemListContainer";
import Navbar from "./Components/header/Navbar";


// ! Intentar sacarle el nombre a la f default
export default function App() {
    return (
        <> {/* Fragments, usados para cuando se requiere return más de un componente, a veces escritos como <div></div> */}
            <CssBaseline />
            <Router>
                <header>
                    <Navbar />
                </header>

                <Routes>
                    {/* <main> */}
                        <Route path='/item/:itemId' element={ <ItemDetailContainer /> } />
                        <Route path='/' element={ <ItemListContainer /> } />
                        <Route path='/category/:categoryId' element={ <ItemListContainer /> } />
                    {/* </main> */}
                </Routes>

                <footer>

                </footer>
            </Router>
        </>
    );
};

