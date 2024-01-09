import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { productSearch } from '../Redux/Slices/productSlice';
function Header({insideHome}) {
    const dispatch = useDispatch()
    const [wishlistCount, setWishlistCount] = useState(0)
    const [cartCount,setCartCount] = useState(0)
    const wishlist = useSelector(state => state.wishlistSlice.wishlist)
    const cart = useSelector(state=>state.cartReducer)
    useEffect(() => {
        setWishlistCount(wishlist?.length)
        setCartCount(cart?.length)

    }, [wishlist,cart])


    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand><Link to={'/'} style={{ textDecoration: 'none ' }}><i class="fa-solid fa-truck-fast me-2"></i>E Cart</Link></Navbar.Brand>
                    <div className='d-flex'>
                    {  insideHome&&  <nav Link className='me-lg-5'>
                            <input onChange={e=>dispatch(productSearch(e.target.value.toLowerCase()))} type="text" className='form-control' placeholder='Search Products!!!'/>
                        </nav>}
                        <Link to={'/wishlist'} style={{ textDecoration: 'none' }}><Button className='me-3 rounded' variant="outline-primary">
                            <i class="fa-solid fa-heart me-2"></i>Wishlist <Badge className='ms-2 rounded'>{wishlistCount}</Badge></Button>{' '}</Link>

                        <Link className='me-3' to={'/cart'}><Button className='rounded' variant="outline-primary">
                            <i class="fa-solid fa-cart-shopping ms-1"></i>Cart
                            <Badge className='ms-2 rounded'>{cartCount}</Badge></Button></Link>


                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header