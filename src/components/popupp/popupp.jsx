import { useNavigate } from "react-router-dom";
import { useState } from "react";



import './style.css';





export function Popupp({setPopuppState}) {
    

     //Задействуем хук useNavigate, который возвращает фуекцию для навигации
    
     const navigate = useNavigate();

     //Функция для перехода в каталог с товарами
     const handlerGoToCatalog = () => {
        
  
        //Отправимся на страницу каталога с помощью функции navigate
        navigate('/catalog')
    }

    //Функция для закрытия попапа
    const handlerClosePopupp = () => {
        setPopuppState(false)
    }

    return(
  
    <div className="overlay">
        <section className="popupp">
            <button onClick={handlerClosePopupp}>
                Закрыть
            </button>
            <p>Хотите выбрать ноутбук?</p>
            <button onClick={handlerGoToCatalog}>
                Перейти в каталог
            </button>
        </section>
       
    </div>
    )
    
}