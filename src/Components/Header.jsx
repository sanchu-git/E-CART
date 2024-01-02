import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
function Header() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand><Link to={'/'} style={{ textDecoration: 'none ' }}><i class="fa-solid fa-truck-fast me-2"></i>E Cart</Link></Navbar.Brand>
                    <div>
                        <Link to={'/wishlist'} style={{ textDecoration: 'none' }}><Button variant="outline-primary">
                            <i class="fa-solid fa-heart me-2"></i>Wishlist <Badge className='ms-2 rounded'>10</Badge></Button>{' '}</Link>

                        <Link to={'/cart'}><Button variant="outline-primary">
                            <i class="fa-solid fa-cart-shopping me-1"></i>Cart
                        <Badge className='ms-2 rounded'>10</Badge></Button>{' '}</Link>


                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header