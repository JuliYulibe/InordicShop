import { useSelector } from "react-redux"

/**
 * Компонент корзины
 * 
 * @param setVisibleMenu Функция для установки видимости меню
 * @param visibleMenu флаг, который определяет, выводим мы бургер или крестик
 * 
 * @returns Component Опционально в зависимости от флага visibleMenu, либо бургер либо компонент с крестиком
 */
export function ButtonBasket(){
    //Получаем данные, которые находятся в глобальном состоянии в блоке товаров - basket
    const basket = useSelector((state) => state.goods.basket)
    

    return (
        <button>
                <i class="fa fa-shopping-basket" aria-hidden="true"></i>({basket.length})
                </button>
    )
}