import React from "react";
import Header from "./Components/header/_Header";
import Main from "./Components/main/_Main";
// import { Container, Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import './App.css';

// ! Intentar sacarle el nombre a la f default
export default function App() {

    const env = {};
        // Hasta q no este bien seguro como crear un "entorno" o lugar comun para definir cosas lo hice así, era una de las cosas q estube contestandole en questions/qEntrega 2
        // Hablo de estilos y cosas universales y no de argumentos de uso unico o especifico

    env.colors = {
        main:           "#02355A",
        secondary:      "#FFFFFF",
        accent:         "#E8522B",
        bg:             "#FFFFFF"
    };

    env.messages = {
        greeting:       "Hola Mundo !!!"
    };

    return (
        <>
            <Header env={ env } />
            <Main   env={ env } />
        </>
    );
};

