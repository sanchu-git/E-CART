import React from 'react'
import { Button } from 'react-bootstrap'
function View() {
  return (
    <div className='mt-5 container'>
        <div className="row mt-5 align-items-center">
            <div className="col-md-4">
                <img className='rounded shadow' style={{height:'250px',width:'100%'}} src="https://alkhalej-services.net/user_images/news/15-09-23-114871749.jpg" alt="" />
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-6">
                <p>PID: HFHFHFHFHFHF</p>
                <h5 className='fw-bolder'>$ 560</h5>
                <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem optio qui minima, non magnam ex libero maiores distinctio eum error facere nobis accusamus? Facilis ex quod voluptate facere aliquam velit.</p>
                <div className='d-flex justify-content-between'>
                <Button variant="outline-danger"><i class="fa-solid fa-heart text-danger me-1"></i>Wishlist</Button>{' '}
                <Button variant="outline-success"><i class="fa-solid fa-cart-shopping text-success me-1"></i>Cart</Button>{' '}
                </div>
            </div>
        </div>
    </div>
  )
}

export default View