import React from 'react';
import { NavLink } from 'react-router-dom';

function ModalWindow() {
  return (
    <div className='mobile-container' id="popup">
      <a href="#header" className="popup__area"></a>
      <div className="header-mobile">
        <a href="" className="close-icon">
          <span></span>
          <span></span>
        </a>
        <ul className="mobile-list">
          <li><NavLink to="/" className="mobile-list__item">главная</NavLink></li>
          <li><a href="#main" className="mobile-list__item">выбрать велосипед</a></li>          
          <li><a href="#footer" className="mobile-list__item">контакты</a></li>
          <li><NavLink to='/Link5' className="mobile-list__item">сообщить о краже</NavLink></li>
          <li><NavLink to='/Link6' className="mobile-list__item">регистрация</NavLink></li>
          <li><NavLink to='/Link7' className="mobile-list__item">войти</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export { ModalWindow }