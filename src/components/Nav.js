import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { BsFillBagFill } from "react-icons/bs";
import styled from "styled-components";
import { mobile } from '../responsive';

const Title = styled.h1`
  font-size: 50px;
  font-color: #E6E6E6;
  ${mobile({ height: "50px" })}
`;

const Nav = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer)
    return (
        <div className="nav">
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <Link to="/"><img src="/images/lvv.jpg" alt="logo"/></Link>
                    </div>
                    <Link to="/"><Title> <div className="nav__center">LOUIS VUITTON</div></Title></Link>
                    <div className="nav__right">
                        <Link to="/cart">
                            <div className="basket">
                             <BsFillBagFill className="cart-icon" />
    <span>{totalQuantities}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
