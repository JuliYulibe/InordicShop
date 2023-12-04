import { useEffect } from 'react'
import goodJSON from '../../stub/goods.json'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { createExtraActions } from '../../store/action/goods';
import { UseSelector } from 'react-redux';

import './style.css';

export function CatalogList() {

    const {getAllGoods} = createExtraActions();
    const dispatch = useDispatch()

    const {goods: { test }} = useSelector((state) => state)
    


    useEffect(() => {
        setTimeout(() => {
            dispatch(
                getAllGoods
        )
        }, 4000)
    }, [])
    console.log(goodJSON)
    return (
        <div>
            {test}
            {goodJSON.map((goodItem) => {
                return (
                    <li key={goodItem.ID} className='good-list'>
                        <img src={require(`../../assets/${goodItem.IMG}`)} />
                        <div>
                            <Link to={goodItem.ID}>
                                {goodItem.TITLE}
                            </Link>
                            <p className='good-discr'>{goodItem.DISCR}</p>
                        </div>
                        <div className='good-price'>
                            {goodItem.PRICE} руб.
                        </div>
                        <section class='button-container'>
                            <Link to={goodItem.ID}>
                                <i className="fa fa-desktop" aria-hidden="true"></i>
                            </Link>
                            <Link to={goodItem.ID}>
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </Link>
                        </section>
                    </li>
                )
            })}
        </div>
    )
}