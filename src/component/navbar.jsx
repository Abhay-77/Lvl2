import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <nav>
        <h1>MEC Matrimony</h1>
        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/add">ADD CONFESSION</Link>
            </li>
        </ul>
    </nav>
  )
}

export default navbar