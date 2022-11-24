import React from 'react';

const ReportTheft = () => {
    return (

    <section className='forms'> 
        <form method="post" action="" name="signup-form">
            <div class="form-element">
                <label>Номер лицензии</label>
                <input name="license" />
            </div>
            <div class="form-element">
                <label>Тип велосипеда</label>
                <p> 
                  <select name="type" required>
                    <option></option>
                    <option>Шоссейный велосипед</option>
                    <option>Горный велосипед</option>
                    <option>Велосипед двухподвес</option>
                    <option>Фэтбайк</option>
                  </select>
                </p>
            </div>
            <div class="form-element">
                <label>Цвет велосипеда</label>
                <input type="text" name="color"  required />
            </div>
            <div class="form-element">
                <label>Дата кражи</label>
                <input type="text" name="date"  required />
            </div>
            <div class="form-element">
                <label>Дополнительная информация</label>
                <input type="text" name="information"  required />
            </div>

            <button type="submit" name="register" value="register">Сообщить о краже</button>
        </form>
    </section>

    )
}

export { ReportTheft }