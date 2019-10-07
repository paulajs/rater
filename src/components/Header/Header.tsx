import React from 'react';
import { Link } from "react-router-dom";

export function Header() {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/create">Create</Link>
                </li>
            </ul>
        </nav>
    )
};