

import { useState } from 'react';

import { TEXT } from '../../consts.ts'
import { Logo } from './componenets/logo.jsx'
import { Menu } from './componenets/menu.jsx'
import { Theme } from './componenets/theme.jsx'
import { Lang } from './componenets/lang.jsx'
import { ButtonBasket } from './componenets/button-basket.jsx'
import { ButtonBurger } from './componenets/button-burger.jsx'



import './style.css';

export function Header() {

    const [text, setText] = useState(TEXT.header)
    
    // хук useState https://legacy.reactjs.org/docs/hooks-state.html
    const [menu, setMenu] = useState(text.menu)
    const [visibleMenu, setVisibleMenu] = useState(false)
    const [theme, setTheme] = useState('light')
    const [lang, setLang] = useState('RU')


    // План на след занятие
    // 2 - Поработать со state
    // 3 - введем функции
    // 4 - рассмотреть события

    /**let array = [1, 2, 3, 4, 5];
    array.forEach(function(element, index){
        //console.log(element)
        if (element == 3) {
            //return 'x'
            array[index] = 'x'
        }
    });
    console.log(array)
    // На месте двойки, запишем строчку 'ДВА', 
    // Длинная запись
   /* const newArray = array.map(function(element){
        //console.log(element)
        if (element == 4) { 
            return 'x'
        } else {
            return 'y'
        }
    }) 
    const newArray = array.map((element) => (element == 4) ? 'x' : 'y')
    console.log(newArray)
    */

    const handlerChangeLang = (event) => { 
        // Получаем весь селект
        const select = event.target
        // Получим выбранную опцию из селекта
        const currentSelectOption = select.value
        console.log(currentSelectOption)
        // Устанавливаем выбранный язык
        setLang(currentSelectOption)
    }

    return (
        <header className={theme}>
            <Logo/>
            <nav>
                
                
                    {visibleMenu && <Menu menu={menu[lang]}/>}
                    <Theme setTheme={setTheme} text={text.theme[lang]}/>
                    <Lang text={text.lang[lang]} handlerChangeLang={handlerChangeLang}/>
                    
                
               
                        
                <section className='button-container-header'>
                
                <ButtonBasket/>
                <ButtonBurger 
                visibleMenu={visibleMenu}
                setVisibleMenu={setVisibleMenu}
                />
                

               
                </section>

            </nav>
        </header>
    )
}