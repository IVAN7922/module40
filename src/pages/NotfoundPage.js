import React from 'react';
import { NavLink } from 'react-router-dom';

const NotfoundPage = () => {
    return (

        <div className='Notfound'>
            <h1>Страница не найдена!  Перейдите на <NavLink to='/'>Главную страницу</NavLink></h1>
        </div>
    )
}

export { NotfoundPage }