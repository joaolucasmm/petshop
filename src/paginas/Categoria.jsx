import React, { useState } from "react";
import { useEffect } from "react";
import { Link, Route, Routes, useMatch, useNavigate, useParams } from "react-router-dom";
import { busca } from "../api/api";
import "../assets/css/blog.css";
import ListaCategorias from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";
import Pagina404 from "./Pagina404";
import SubCategoria from "./Subcategoria";

const Categoria = () => {
    const { id } = useParams();
    let history = useNavigate();
    const [subcategorias, setSubCategorias] = useState([]);
    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias);
        });
    }, [id]);
    
    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>

            <ListaCategorias />
            <ul className="lista-categorias container flex">
                {subcategorias.map((subcategoria) => (
                    <li
                        className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
                        key={subcategoria}
                    >
                        <Link to={`${subcategoria}`}>
                            {subcategoria}
                        </Link>
                    </li>
                ))}
            </ul>
            <Routes>
                <Route
                    index
                    element={<ListaPost url={`/posts?categoria=${id}`} />}
                />
                <Route path=':subcategoria' element={<SubCategoria />}  />
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </>
    );
};

export default Categoria;
