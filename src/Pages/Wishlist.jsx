import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Redux/Slices/wishlistSlice'

function Wishlist() {
  const dispatch = useDispatch()
  const wishlist = useSelector(state=>state.wishlistSlice.wishlist)

  return (
    <div style={{ marginTop: '60px' }}>
      <Row className='mt-5 container'>
        {wishlist?.length>0?wishlist?.map(product=>(
          
        
          <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card className='shadow rounded' style={{ width: '18rem' }}>
            <Link to={`/view/${product.id}`}><Card.Img variant="top" style={{height:'180px'}} src={product.thumbnail} /></Link>
            <Card.Body>
              <Card.Title style={{ height: '20px' }}>{product.title.slice(0,20)}...</Card.Title>
              <div className='d-flex justify-content-between'>
                <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn btn-light fs-5'><i class="fa-solid fa-heart-circle-xmark text-danger"></i></Button>
                <Button className='btn btn-light fs-5'><i class="fa-solid fa-cart-shopping text-success"></i></Button>
              </div>
            </Card.Body>
          </Card>

        </Col>
        )):<div className='text-center mt-5'>
          <img width={'50%'} style={{marginLeft:'20%'}} src="https://limasy.com/img/empty-animation1.gif" alt="" />
          <h1 style={{marginLeft:'20%'}}>Your Wishlist Is Empty</h1>
        </div>
        }
      </Row>

    </div>
  )
}

export default Wishlist