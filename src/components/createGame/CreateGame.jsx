import React, { useState } from 'react';
import s from './CreateGame.module.css'
import Navbar from '../navbar/Navbar'
import axios from 'axios';

function CreateGame() {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        name: '',
        description: '',
        releaseDate: undefined,
        rating: 0,
        genres: [],
        platforms: []
    });

    const handleChange = e => {
        if (e.target.parentNode.parentNode.id === 'genres') {
            !e.target.checked ? setForm({
                ...form,
                genres: form.genres.filter(x => e.target.value !== x)
            }) : setForm({
                ...form,
                genres: form.genres.concat(e.target.value)
            })
        }
        if (e.target.parentNode.parentNode.id === 'platforms') {
            !e.target.checked ? setForm({
                ...form,
                platforms: form.platforms.filter(x => e.target.name !== x)
            }) : setForm({
                ...form,
                platforms: form.platforms.concat(e.target.name)
            })
        }
        switch (e.target.name) {
            case 'name':
                setForm({ ...form, name: e.target.value })
                break;
            case 'description':
                setForm({ ...form, description: e.target.value })
                break;
            case 'date':
                setForm({ ...form, releaseDate: e.target.value })
                break;
            case 'rating':
                setForm({ ...form, rating: e.target.value })
                break;
            default:
                break;
        }
        setErrors(validate({
            ...form,
            [e.target.name]: e.target.value
        }))
    }
    const validate = form => {
        let errors = {};
        if (!form.name) {
            errors.name = 'Game Name is required';
        } else if (!/^\w{4,}$/.test(form.name)) {
            errors.name = 'Game Name must have at least 4 characters';
        }
        if (!form.description) {
            errors.description = 'Description is required';
        } else if (!/^\w{8,}$/.test(form.description)) {
            errors.description = 'Description must have at least 8 characters'
        }
        if (!form.releaseDate) errors.releaseDate = 'Release Date is required';
        if (!form.rating){
            errors.rating = 'Rating is required';
        } else if (!/^[1-5]$/.test(form.rating)){
            errors.rating = 'Rating must be between 1 and 5';
        }
        return errors;
    }
    const handleSubmit = e => {
        e.preventDefault()
        validate(form);
        if (Object.values(errors).length){
            return alert(Object.values(errors).join('\n'));
        }
        axios.post('http://localhost:3001/videogame', form)
        alert(`Game created succesfully: ${form.name}`)
    }
    return (
        <div className={s.creategame}>
            <Navbar />
            <div className={s.wrapper}>
                <div className={s.container}>
                    <h1 className={s.title}>Create your own Game</h1>
                    <form onSubmit={handleSubmit} onChange={handleChange}>
                        <label htmlFor='name'>Name: </label>
                        <br />
                        <input placeholder='Name' type="text" id='name' className={errors.name && s.error} name='name' />
                        <br />
                        <label htmlFor="description">Description: </label>
                        <br />
                        <textarea name='description' placeholder='Description...' className={`${errors.description ? s.error : ''} ${s.textarea}`} id="description" cols="30" rows="3" />
                        <br />
                        <label htmlFor="date">Release Date: </label>
                        <br />
                        <input name='date' className={errors.releaseDate && s.error} type="date" id="date" />
                        <br />
                        <label htmlFor="rating">Rating: </label>
                        <br />
                        <input name='rating' className={errors.rating && s.error} placeholder='Rate from 1 to 5' type="tel" id="rating" maxLength='1' />
                        <br />
                        <div id='genres' className={s.genresContainer}>
                            <label className={s.labelTitle}>Genres </label>
                            <div className={s.divgenre}>
                                <label htmlFor="Action">Action</label>
                                <input name='Action' value='1' type="checkbox" id="Action" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Indie">Indie</label>
                                <input name='Indie' value='2' type="checkbox" id="Indie" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Adventure">Adventure</label>
                                <input name='Adventure' value='3' type="checkbox" id="Adventure" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="RPG">RPG</label>
                                <input name='RPG' value='4' type="checkbox" id="RPG" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Strategy">Strategy</label>
                                <input name='Strategy' value='5' type="checkbox" id="Strategy" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Shooter">Shooter</label>
                                <input name='Shooter' value='6' type="checkbox" id="Shooter" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Casual">Casual</label>
                                <input name='Casual' value='7' type="checkbox" id="Casual" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Simulation">Simulation</label>
                                <input name='Simulation' value='8' type="checkbox" id="Simulation" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Puzzle">Puzzle</label>
                                <input name='Puzzle' value='9' type="checkbox" id="Puzzle" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Arcade">Arcade</label>
                                <input name='Arcade' value='10' type="checkbox" id="Arcade" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Platformer">Platformer</label>
                                <input name='Platformer' value='11' type="checkbox" id="Platformer" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Racing">Racing</label>
                                <input name='Racing' value='12' type="checkbox" id="Racing" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Massively-Multiplayer">Massively-Multiplayer</label>
                                <input name='Massively-Multiplayer' value='13' type="checkbox" id="Massively-Multiplayer" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Sports">Sports</label>
                                <input name='Sports' value='14' type="checkbox" id="Sports" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Fighting">Fighting</label>
                                <input name='Fighting' value='15' type="checkbox" id="Fighting" />
                            </div>
                        </div>
                        {/* END GENRES */}
                        <div id='platforms' className={s.platformsContainer}>
                            <label className={s.labelTitle}>Platforms </label>
                            <div className={s.divgenre}>
                                <label htmlFor="PC">PC</label>
                                <input name='PC' type="checkbox" id="PC" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="iOS">iOS</label>
                                <input name='iOS' type="checkbox" id="iOS" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="Android">Android</label>
                                <input name='Android' type="checkbox" id="Android" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="macOS">macOS</label>
                                <input name='macOS' type="checkbox" id="macOS" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="PlayStation 4">PlayStation 4</label>
                                <input name='PlayStation 4' type="checkbox" id="PlayStation 4" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="PlayStation 5">PlayStation 5</label>
                                <input name='PlayStation 5' type="checkbox" id="PlayStation 5" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="XBOX">XBOX</label>
                                <input name='XBOX' type="checkbox" id="XBOX" />
                            </div>
                            <div className={s.divgenre}>
                                <label htmlFor="PS Vita">PS Vita</label>
                                <input name='PS Vita' type="checkbox" id="PS Vita" />
                            </div>
                        </div>
                        <br />
                        <button className={s.btn} type='submit'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CreateGame;