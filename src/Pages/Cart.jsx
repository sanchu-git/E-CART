import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Cart() {
    const cart = useSelector(state=>state.cartReducer)
  return (
    <div className='container mt-5'>
        {cart?.length>0?
            <div className="row mt-5">
            <div className="col-lg-8">
                <h3 className='mt-5'>Cart Summery</h3>
                <table className='table shadow mt-3'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product,index)=>(
                            <tr key={index}>
                            <th>{index+1}</th>
                            <th>{product.title}</th>
                            <th><img style={{height:'100px',width:'100px'}} src={product.thumbnail} alt="" /></th>
                            <th>$ {product.price}</th>
                            <th><button className='btn'><i className='fa-solid fa-trash text-danger'></i></button></th>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="col-lg-4 mt-5">
                <div className='d-flex flex-column border rounded p-4'>
                <h5>Total Product: <span className='fw-bolder'>3</span></h5>
                <h3>Total Amount: <span className='fw-bolder'>$ 560</span></h3>
                <hr />
                <div className='d-grid'>
                    <button className='btn btn-success'>CHECKOUT</button>
                </div>
                </div>
            </div>
        </div>:
        <div className='text-center mt-5'>
          <img width={'50%'} style={{marginLeft:'5%'}} src="https://limasy.com/img/empty-animation1.gif" alt="" />
          <h1 style={{marginLeft:'5%'}}>Your Cart Is Empty</h1>
          <Link to={'/'} className='btn btn-success' style={{marginLeft:'5%'}}>Click Here To Shop More</Link>
        </div>
        }
    </div>
  )
}

export default Cart