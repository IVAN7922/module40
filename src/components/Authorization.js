import React from 'react';

const Authorization = () => {
   return (

    <section className='forms'> 
        <form method="post" action="" name="signin-form">
            <div class="form-element">
              <label>Логин</label>
              <input type="text" name="username" pattern="[a-zA-Z0-9]+" required />
            </div>
            <div class="form-element">
              <label>Пароль</label>
              <input type="password" name="password" required />
            </div>
            
            <button type="submit" name="login" value="login">Войти</button>
        </form>
    </section> 
  )
}

export { Authorization }