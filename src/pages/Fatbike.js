import React from 'react';
import { ModalWindow } from '../components/ModalWindow';

const Fatbike = () => {
    return (
        <div className="body">

            <main>
                <section className="project" id="project">
                    <div className="container">
                        <h1 className="project-header">Фэтбайк</h1>
                        <div className="project-img">
                            <img src="https://images.unsplash.com/photo-1570539589883-3ba5a669ec02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Фэтбайк" />
                        </div>
                        <div className="project-description">
                            <p>Отличается повышенной проходимостью. Способен с легкостью преодолевать такие сложные поверхности, как рыхлый песок, снег, грязь. Ширина покрышек составляет 3,5-5 дюймов, а давление в них держится на уровне 0,2-2 атмосферы. Фэтбайки отлично подходят не только в качестве велосипеда для развлечений, но и для туризма по глухим местам.</p>
                            <span className='rent'>Аренда 120 руб./час, 1200 руб./сутки</span>
                        </div>
                    </div>
                </section>
            </main>

            <ModalWindow />

        </div>

    )
}

export { Fatbike }