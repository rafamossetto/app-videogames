import React from 'react';
import s from './Landing.module.css';
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div className={s.landing}>
            <h1 className={s.title}>Videogames App</h1>
            <Link to='/videogames'>
                <button className={s.eightbitBtn}>Play!</button>
            </Link>
        </div>
    )
}
export default Landing;