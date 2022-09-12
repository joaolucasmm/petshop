import React from "react";
import "./assets/css/base/base.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Pagina404 from './paginas/Pagina404';
import Cabecalho from "./components/Cabecalho";
import Post from "./paginas/Post";
import Categoria from "./paginas/Categoria";

function App() {
	
    return (
        <Router>
            <Cabecalho />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/sobre" element={<Sobre />}></Route>
                <Route path="/categoria/:id/*" element={<Categoria />}></Route>
                <Route path="/posts/:id" element={<Post />}></Route>
                <Route path="*" element={<Pagina404 />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
