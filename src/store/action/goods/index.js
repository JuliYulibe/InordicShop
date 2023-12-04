
//goodJSON - заглушка содержащая все товары
import goodJSON from '../../../stub/goods.json' 
//Экшены для товаров
export function createExtraActions() {
    //Возвращаем обЪект функций
    return {
        getAllGoods: getAllGoods,
        addToBasket: addToBasket,
    };

    //Действие, запрос к данным о товарах
    function getAllGoods() {
        //Запрос к данным на сервере
        console.log('Запрашиваем товары')
        return{
            //Тип обработчика, который сработает в редаксе
            type: 'GET_ALL_GOODS',
            //Всегда данные, текущего разработчика
            payload: goodJSON,
        }
    }

    //Действие, которое добавляет товар в корзину
    function addToBasket(good){
        return {
            type: 'ADD_TO_BASKET',
            //Передаем выбранный товар
            payload: good
        }
    }
}
