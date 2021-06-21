import React from 'react';
import { useSelector } from 'react-redux';
import s from './Home.module.css';
import Navbar from '../navbar/Navbar.jsx';
import Pagination from '../pagination/Pagination.jsx';
import Filters from '../filters/Filters';
import Game from '../games/Game';
import Loading from '../loading/Loading';
import { useState } from 'react';

function Home() {
    const videogames = useSelector(state => state.videogames);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(15)

    const indexOfLastGame = currentPage * gamesPerPage; // 15
    const indexOfFirstGame = indexOfLastGame - gamesPerPage; // 15 - 15
    const currentGames = videogames?.slice(indexOfFirstGame, indexOfLastGame);
    
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <main className={s.background}>
            <Navbar />
            <Filters />
            <div>
                <div className={s.games}>
                    {currentGames ? currentGames.map((_, idx) => <Game props={currentGames[idx]} key={idx} />) : <Loading />}
                </div>
                <Pagination gamesPerPage={gamesPerPage} totalGames={videogames?.length} paginate={paginate} />
            </div>
        </main>
    )
}

export default Home;