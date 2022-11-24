import React from 'react';
import { ModalWindow } from '../components/ModalWindow';

const RoadBikes = () => {
    return (
        <div className="body">

            <main>
                <section className="project" id="project">
                    <div className="container">
                        <h1 className="project-header">Шоссейный велосипед</h1>
                        <div className="project-img">
                            <img src="https://images.unsplash.com/photo-1608393508049-40db8711fbd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        </div>
                        <div className="project-description">
                            <p>Для шоссейников характерны: легкий вес, руль барабан, узкие покрышки (слики). Все это обеспечивает аэродинамическую посадку, поэтому долгая езда с высокой средней скоростью это не проблема. Но дорожное покрытие должно быть очень хорошим. На такой велосипед не повесишь крылья и багажник, но это стоит того, чтобы прокатиться с ветерком пару сотен километров.</p>
                            <span className='rent'>Аренда 100 руб./час, 1000 руб./сутки</span>
                        </div>
                    </div>
                </section>
            </main>

            <ModalWindow />

        </div>

    )
}

export { RoadBikes }