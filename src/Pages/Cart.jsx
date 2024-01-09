import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decQuantity, emptyCart, incQuantity, removeCart } from '../Redux/Slices/cartSlice'
import Button from 'react-bootstrap/Button';
import Header from '../Components/Header'

function Cart() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector(state => state.cartReducer)
    const [cartAmount, setCartAmount] = useState(0)
    useEffect(() => {
        if (cart?.length > 0) {
            setCartAmount(cart?.map(product => product.totalPrice).reduce((p1, p2) => p1 + p2))
        } else {
            setCartAmount(0)
        }
    }, [cart])
    const handleCheckout = () => {
        alert("Your order has Successfully placed... Thank you for purchasing with us!!!")
        dispatch(emptyCart())
        navigate('/')
    }
    const decrement = (product) =>{
        if(product.quantity==1){
            dispatch(removeCart(product.id))
        }else{
            dispatch(decQuantity(product))
        }
    }
    return (
        <>
            <Header />
            <div className='container mt-5'>
                {cart?.length > 0 ?
                    <div className="row mt-5">
                        <div className="col-lg-8">
                            <h3 className='mt-5'>Cart Summery</h3>
                            <table className='table shadow mt-3'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Image</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((product, index) => (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <th>{product.title}</th>
                                            <th><img style={{ height: '100px', width: '100px' }} src={product.thumbnail} alt="" /></th>
                                            <th> <div className='d-flex'>
                                                <button onClick={()=>dispatch(decrement(product))} className='btn'>-</button>

                                                <input style={{ width: '60px' }} className='form-control' type="text" value={product.quantity} readOnly />
                                                <button onClick={()=>dispatch(incQuantity(product))} className='btn'>+</button>
                                            </div> </th>
                                            <th>$ {product.totalPrice}</th>
                                            <th><button onClick={() => dispatch(removeCart(product.id))} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></th>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className='float-end'>
                                <Button onClick={() => dispatch(emptyCart())} variant="outline-danger">Empty Cart</Button>{' '}
                                <Link to={'/'}><Button variant="outline-warning">Shop More</Button>{' '}</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className='d-flex flex-column border rounded p-4'>
                                <h5>Total Product: <span className='fw-bolder'>{cart?.length}</span></h5>
                                <h3>Total Amount: <span className='fw-bolder'>${cartAmount}</span></h3>
                                <hr />
                                <div className='d-grid'>
                                    <button onClick={() => handleCheckout()} className='btn btn-success'>CHECKOUT</button>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className='text-center mt-5'>
                        <img width={'50%'} style={{ marginLeft: '5%' }} src="https://limasy.com/img/empty-animation1.gif" alt="" />
                        <h1 style={{ marginLeft: '5%' }}>Your Cart Is Empty</h1>
                        <Link to={'/'} className='btn btn-success' style={{ marginLeft: '5%' }}>Click Here To Shop More</Link>
                    </div>
                }
            </div>
        </>
    )
}

export default Cart