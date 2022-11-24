import React from 'react';

const Footer = () => {
    return (
       
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-row">
                    <div className="footer-copyright">
                        <div className="footer-copyright-name">© Bicycle Rental</div>
                        <p>Прокат велосипедов в крупных городах России</p>
                    </div>

                    <div className="footer-сontacts">
                        <div className="footer-copyright-mail">Оставляйте заявки на электронной почте <br />
                            <a href="mailto:Bicycle@email.ru">Bicycle@email.ru</a>
                        </div>
                        <div className="footer-copyright-tel">Делайте заказы по телефону <br />
                            <a href="tel:+7(999)123-4567">+7 (999) 123-45-67</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}

export { Footer }