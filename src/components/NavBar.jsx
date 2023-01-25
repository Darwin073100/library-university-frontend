import React from "react";
import '../styles/NavBar.scss';

function NavBar(){
    return(
        <>
            <nav class="nav-bar">
                <ul>
                    <li><a href="/">Students</a></li>
                    <li><a href="/books">Books</a></li>
                    <li><a href="/lending">Lending</a></li>
                </ul>
            </nav>
        </>
    )
}

export { NavBar };