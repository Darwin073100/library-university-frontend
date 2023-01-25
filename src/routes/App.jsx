import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "../containers/Layout";
import { Books } from "../pages/Books";
import { Lending } from "../pages/Lending";
import { Students } from "../pages/Students";
import '../styles/global.css';

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Students/>}/>
                    <Route path="/books" element={<Books/>}/>
                    <Route path="/lending" element={<Lending/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export { App };