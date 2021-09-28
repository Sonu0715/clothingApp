import React,{useContext} from 'react'
import {Link} from "react-router-dom";
import {CartContext} from "../global/CartContext"

const Nav = () => {
    const {qty} = useContext(CartContext);
    return (
            <nav>
                <ul className="left">
                    <li><Link to="/">PeopleShop</Link></li>
                </ul>
                <ul className="right">
                    <li><Link to="cart">
                        <span className="shoppingCart">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </span>
                        <span className="cartCount">{qty}</span>
                    </Link>
                    </li>
                </ul>
            </nav>

    )
}

export default Nav
