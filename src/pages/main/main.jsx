import { Link } from "react-router-dom";

import './style.css';

// Импортируем общие компоненты - шапку и подвал сайта
import { Header, Footer, Popupp, Button } from '../../components'

import Baner from '../../assets/baner.jpeg'
import { useState } from "react";

console.log('Baner', Baner)

const sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(https://overclockers.ru/st/legacy/blog/422120/347276_O.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
};

/**
 * Компонент для отображения главной страницы
 */


export function Main(){

    const [popuppState, setPopuppState] = useState(false)

    const hadlerOpenpopuppClick = () => {
       
        setPopuppState(true)

    }

    return (
        <main>
            <Header />
                <section className="banner" style={sectionStyle}>
                    <div>
                        <h1>Онлайн магазин ноутбуков</h1>
                        <h2>Лучшие ноутбуки в мире!</h2>
                       
                        <Button
                            hadlerClick={hadlerOpenpopuppClick}
                            text='Купить ноутбук'
                            size='24px'
                        />
                        
                    </div>
                </section>
                { popuppState && <Popupp setPopuppState={setPopuppState}/> }
            <Footer />
        </main> 
    )
}