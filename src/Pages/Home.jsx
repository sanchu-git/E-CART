import React, { useEffect } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../Redux/Slices/productSlice'
import Spinner from 'react-bootstrap/Spinner';
function Home() {
  const dispatch = useDispatch()
  const { loading, products, error } = useSelector((state) => state.productSlice)

  useEffect(() => {
    dispatch(fetchProducts())

  }, [])

  return (
    <div style={{ marginTop: '60px' }}>
      {
        loading ? <div className='d-flex justify-content-center mt-5'><Spinner className='me-3' animation="border" variant="info" />Loading...</div> :

          <Row className='mt-5 container'>
            { products.length>0&&products.map((product,index)=>(
              <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
              <Card className='shadow rounded' style={{ width: '18rem' }}>
                <Link to={`/view/${product.id}`}><Card.Img variant="top" style={{height:'180px'}} src={product.thumbnail} /></Link>
                <Card.Body>
                  <Card.Title style={{height:'50px'}}>{product.title.slice(0,20)}...</Card.Title>
                  <div className='d-flex justify-content-between'>
                    <Button className='btn btn-light fs-5'><i class="fa-solid fa-heart text-danger"></i></Button>
                    <Button className='btn btn-light fs-5'><i class="fa-solid fa-cart-shopping text-success"></i></Button>
                  </div>
                </Card.Body>
              </Card>

            </Col>
            ))}
          </Row>
      }
    </div>
  )
}

export default Home