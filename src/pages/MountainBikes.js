import React from 'react';
import { ModalWindow } from '../components/ModalWindow';

const MountainBikes = () => {
    return (
        <div className="body">

            <main>
                <section className="project" id="project">
                    <div className="container">
                        <h1 className="project-header">Горный велосипед</h1>
                        <div className="project-img">
                            <img src="https://images.unsplash.com/photo-1575585269294-7d28dd912db8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Горные велосипеды" />
                        </div>
                        <div className="project-description">
                            <p>Это самый популярный и распространенный вид велосипеда. Предназначен для езды по бездорожью. Но современные велосипедисты используют горные велосипеды для езды повсюду, от убитых грунтов до идеально ровного шоссе.</p>
                            <span className='rent'>Аренда 130 руб./час, 1300 руб./сутки</span>
                        </div>
                    </div>
                </section>
            </main>

            <ModalWindow />

        </div>

    )
}

export { MountainBikes }