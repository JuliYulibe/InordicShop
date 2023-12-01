import  {useState} from "react";
import  {useParams} from 'react-router-dom';
import './style.css';


import goodJSON from '../../stub/goods.json'


export function CatalogItem() {
   
    //useParams позволяет получить из поисковой строки
   // console.log(useParams)
   const {id} = useParams()
   //console.log('params', params )

   const[countGood, setcountGood] = useState(1)

    //const good = goodJSON.find( (good) => good.ID == id)
    //console.log(good)

    const {TITLE, DISCR, PRICE, IMG, COUNT } = goodJSON.find((good) => good.ID == id)

    const handlerAddToBasket = () => {
        alert('Добавление товара в корзину')
    }

    const handlerClick = (operation) => {
       
        if(operation == 'mines'){
            const newCount = countGood - 1
            if (countGood > 1){
            setcountGood(newCount)
            }
            } else {
                setcountGood((prevCount) => 
                prevCount < COUNT  ? ++prevCount : prevCount)
            }
            
    }
    
   return (
        <div className='good-item'>
            <img src={require(`../../assets/${IMG}`)}/>
            <h1>{TITLE}</h1>
            <h2>{DISCR}</h2>
            <p>{PRICE}</p>
            <div className='buttons-block'>
                <button onClick={() => handlerClick('mines')}>
                    -
                </button>
                <p>
                    {countGood}
                </p>
                <button onClick={() =>handlerClick('plus')}>
                    +
                </button>
            </div>
            {
                countGood == COUNT ? (
                    <div className="error">
                        На складе всего {COUNT} кол-во  товара, вы не можете добавить больше
                    </div>
                ) : ''
             } 
             <button className="add-to-basket" onClick={() => handlerAddToBasket()}>
                Добавить в корзину
             </button>
        </div>
    )
}