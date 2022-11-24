import React from 'react';
import { Routes, Route, NavLink } from "react-router-dom"

import { Main } from './Main';
import { RoadBikes } from '../pages/RoadBikes';
import { MountainBikes } from '../pages/MountainBikes';
import { BicycleTwoSuspension } from '../pages/BicycleTwoSuspension';
import { Fatbike } from '../pages/Fatbike';
import { Registration } from './Registration';
import { ReportTheft } from './ReportTheft';
import { Authorization } from './Authorization';
import { NotfoundPage } from '../pages/NotfoundPage';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header-content">
                    <div className="logo">
                    <NavLink to='/'>"Bicycle Rental"</NavLink>
                    </div>
                    <span class="header-navigation__item"><NavLink to='/'>главная</NavLink></span>
                    <div class="dropdown">
                        <span className='dropdown-item'>выбрать велосипед</span>
                        <div className="dropdown-content header-navigation__item">
                            <NavLink to='/Link1'>шоссейный велосипед</NavLink>
                            <NavLink to='/Link2'>горный велосипед</NavLink>
                            <NavLink to='/Link3'>велосипед двухподвес</NavLink>
                            <NavLink to='/Link4'>фэтбайк</NavLink>
                        </div>
                    </div>    
                    <span class="header-navigation__item"><NavLink to='/Link5'>сообщить о краже</NavLink></span>
                    <span className="header-navigation__contacts"><a href="#footer">контакты</a></span>

                    <div className='accounting'>
                        <button><NavLink to='/Link6'>регистрация</NavLink></button>
                        <button><NavLink to='/Link7'>войти</NavLink></button>
                    </div>

                    <a className="burger-icon" href="#popup">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
            </header>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/Link1' element={<RoadBikes />} />
                <Route path='/Link2' element={<MountainBikes />} />
                <Route path='/Link3' element={<BicycleTwoSuspension />} />
                <Route path='/Link4' element={<Fatbike />} />
                <Route path='/Link5' element={<ReportTheft />} />
                <Route path='/Link6' element={<Registration />} />
                <Route path='/Link7' element={<Authorization />} />
                <Route path='*' element={<NotfoundPage />} />
            </Routes>
        </>
    )
}

export { Header }