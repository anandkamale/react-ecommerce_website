import React from 'react';
import { useSelector, } from "react-redux";
import { Button } from '@material-ui/core';
import currencyFormatter from "currency-formatter";
// import { BsDash, BsPlus } from "react-icons/bs";
// import { BsReverseBackspaceReverse } from "react-icons/bs";

const Checkout = () => {
    const { products, totalPrice } = useSelector(state => state.CartReducer);
    const shoot = () => {
    alert("Shopping Done!!!");}
    return (
        <div className='checkouttop'>


            <div className="cart">
                <div className="container">
                    <h3>Your Checkout</h3>
                    <h3> Fill Basic Information</h3>
                    {products.length > 0 ? <>
                        <div className="row">
                            <div className="col-6">
                                <div className="cart__heading">
                                    <div className="row">
                                        <lebel>First Name:</lebel>
                                        <input type="text" name="first-name" className='form-control'/>
                                        <lebel>Last Name:</lebel>
                                        <input type="text" name="last-name" className='form-control'/>

                                        <div className="row">
                                            <div className="col-9">
                                                
                                                    <div className="row">
                                                    <lebel>Ph Number:</lebel>
                                                    <input type="number" name="number" className='form-control'/>
                                                    <lebel>E-Mail:</lebel>
                                                    <input type="text" name="last-name" className='form-control'/>
                                                    </div>
                                                
                                            </div>
                                        </div> <div className="row">
                                            <div className="col-9">
                                                
                                                    <div className="row">
                                                    <lebel>Address:</lebel>
                                                        <textarea row="3" col="3"/>
                                                        <Button onClick={shoot} type="submit" className='checkout'>Submit</Button>
                                                    </div>
                                               
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            {products.map(product => (
                            <div className="col-6">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> {product.name}</td>
                                            <td>{currencyFormatter.format(product.discountPrice, { code: 'INR' })}</td>
                                            <td>{product.quantity}</td>
                                            <td> {currencyFormatter.format(totalPrice, { code: 'INR' })}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            ))}
                        </div>
                    </> : 'There is no clothes selected'}
                </div>
            </div>




        </div>







    )
}

export default Checkout;