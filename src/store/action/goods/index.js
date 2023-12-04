//Экшены для товаров
export function createExtraActions() {
    //Возвращаем обЪект функций
    return {
        getAllGoods: getAllGoods(),
    };

    //Действие, запрос к данным о товарах
    function getAllGoods() {
        console.log('Запрашиваем товары')
        return{
            type: 'TEST',
            payload: 'Какие то данные'
        }
    }
}