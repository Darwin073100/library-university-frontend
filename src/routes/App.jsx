import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
    return(
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<></>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export { App };