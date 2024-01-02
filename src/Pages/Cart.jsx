import React from 'react'

function Cart() {
  return (
    <div className='container mt-5'>
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
                        <tr>
                            <th>1</th>
                            <th>Samsung S24</th>
                            <th><img style={{height:'100px',width:'100px'}} src="https://alkhalej-services.net/user_images/news/15-09-23-114871749.jpg" alt="" /></th>
                            <th>$ 560</th>
                            <th><button className='btn'><i className='fa-solid fa-trash text-danger'></i></button></th>
                        </tr>
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
        </div>
    </div>
  )
}

export default Cart