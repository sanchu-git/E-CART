import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Wishlist() {
  return (
    <div style={{ marginTop: '60px' }}>
      <Row className='mt-5 container'>
        <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card className='shadow rounded' style={{ width: '18rem' }}>
            <Link to={'/view/1'}><Card.Img variant="top" src="https://alkhalej-services.net/user_images/news/15-09-23-114871749.jpg" /></Link>
            <Card.Body>
              <Card.Title style={{ height: '20px' }}>Product Title</Card.Title>
              <div className='d-flex justify-content-between'>
                <Button className='btn btn-light fs-5'><i class="fa-solid fa-heart-circle-xmark text-danger"></i></Button>
                <Button className='btn btn-light fs-5'><i class="fa-solid fa-cart-shopping text-success"></i></Button>
              </div>
            </Card.Body>
          </Card>

        </Col>
      </Row>

    </div>
  )
}

export default Wishlist