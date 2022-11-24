import React from 'react';

const Registration = () => {
    return (

    <section className='forms'>    
        <form method="post" action="" name="signup-form">
            <div class="form-element">
                <label>Email</label>
                <input type="email" name="email" required />
            </div>
            <div class="form-element">
                <label>Пароль</label>
                <input type="password" name="password" required />
            </div>
            <div class="form-element">
                <label>Имя</label>
                <input type="text" name="username" pattern="[a-zA-Z0-9]+" required />
            </div>
            <div class="form-element">
                <label>Фамилия</label>
                <input type="text" name="username" pattern="[a-zA-Z0-9]+" required />
            </div>
            <div class="form-element">
                <label>Client ID</label>
                <input type="text" name="client_id" required />
            </div>

            <button type="submit" name="register" value="register">Регистрация</button>
        </form>
    </section>

    )
}

export { Registration }