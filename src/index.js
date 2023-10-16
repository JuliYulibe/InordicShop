import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Импортируем, компоненты для каждой страницы
//Страницы - Главная
import { Main, Catalog } from './pages/'
//Импортируем общие компоненты - шапку и подвал сайта
import { Header, Footer } from './components/'





//Импортируем основные инструменты для работы с маршрутизацией в приложении
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//ОбЪект роутера
//В данном обЪекте описаны маршруты приложения

const router = createBrowserRouter([
  {
    //Путь, по которому отображается главная страница
    path: "/",
    //Компонент, который содержит главную страницу
    element: <Main/>,
  },
  {
    //Путь, по которому отображается страница каталога
    
    path: "/catalog",
    element: <Catalog/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <header>
                <h1>Главная страница</h1>
                <nav>
                    <ul>
                        <li>Главная</li>
                        <li>Каталог</li>
                    </ul>
                </nav>
            </header>
          
    <RouterProvider router={router} />
    <footer>
                Подвал главной страницы
    </footer>
  </React.StrictMode>
   
)

