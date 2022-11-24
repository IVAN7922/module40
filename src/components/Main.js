import React from 'react';
import { Link } from "react-router-dom"

import { ModalWindow } from './ModalWindow';
import { Hero } from './Hero';

const Main = () => {
    return (

    <>
       <Hero />

        <main>
            <section className='main' id='main'>
                <div className="container">
                    <h2 className="main-hero">Велосипеды на Ваш выбор</h2>

                    <div className="main-cards-wrapper">

                        <div className="card">
                            <Link to="/Link1" className="card-link">
                                <img className="card-img"
                                    src="https://images.unsplash.com/photo-1608393508049-40db8711fbd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    alt="Шоссейный велосипед" />
                                <h3 class="card-title">Шоссейные велосипеды</h3>
                                <p>Синонимы: шоссе, roadbike, роудбайк, гоночный велосипед. Этот байк относится к категории велосипедов, предназначенных для шоссейных велогонок.</p>
                            </Link>
                        </div>

                        <div className="card">
                            <Link to="/Link2" className="card-link">
                                <img className="card-img"
                                    src="https://images.unsplash.com/photo-1575585269294-7d28dd912db8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    alt="Горный велосипед" />
                                <h3 className="card-title">Горные велосипеды</h3>
                                <p>Вы можете встретить другие его названия: MTB, ATB, mountain-bike, хардтейл, сикстер, найнер, По назначению этот тип можно разделить на велосипеды для даунхилла, фрирайда, дёрта, стрита, кросс-кантри.</p>
                            </Link>
                        </div>

                        <div className="card">
                            <Link to="/Link3" className="card-link">
                                <img className="card-img"
                                    src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    alt="Велосипед двухподвес" />
                                <h3 className="card-title">Велосипеды двухподвес</h3>
                                <p>По сути это тот же самый горный велосипед, но на таких байках амортизация присутствует как на переднем, так и на заднем колесе.</p>
                            </Link>
                        </div>

                        <div className="card">
                            <Link to="/Link4" className="card-link">
                                <img className="card-img"
                                    src="https://images.unsplash.com/photo-1570539589883-3ba5a669ec02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    alt="Фэтбайк" />
                                <h3 className="card-title">Фэтбайки</h3>
                                <p>Фэтбайк — это велосипед с толстыми покрышками. По части геометрии рамы и посадке схож с горным велосипедом.</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </main>       

            <ModalWindow />
        </>
    )
}

export { Main }