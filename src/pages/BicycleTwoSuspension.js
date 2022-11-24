import React from 'react';
import { ModalWindow } from '../components/ModalWindow';

const BicycleTwoSuspension = () => {
    return (
        <div className="body">

            <main>
                <section className="project" id="project">
                    <div className="container">
                        <h1 className="project-header">Велосипед двухподвес</h1>
                        <div className="project-img">
                            <img src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Велосипед двухподвес" />
                        </div>
                        <div className="project-description">
                            <p>Задняя амортизация гораздо сложнее передней (вилки). Каждый производитель стремится создать свою собственную уникальную разработку задней подвески. Условно их можно разделить на два вида: четырёхрычажные подвески и однорычажные подвески.</p>
                            <span className='rent'>Аренда 140 руб./час, 1400 руб./сутки</span>
                        </div>
                    </div>
                </section>
            </main>

            <ModalWindow />

        </div>

    )
}

export { BicycleTwoSuspension }