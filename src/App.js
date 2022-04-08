import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Container, Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import BoxItems from "./Components/main/BoxItems";
import Navbar from "./Components/header/Navbar";


// ! Intentar sacarle el nombre a la f default
export default function App() {
    return (
        <>
            <CssBaseline />
            <Router>
                <header>
                    <Navbar />
                </header>

                <main>
                    <BoxItems />
                </main>

                <footer>

                </footer>
            </Router>
        </>
    );
};

