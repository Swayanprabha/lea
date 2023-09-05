import React from 'react';
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/linkedin.png'
import Linkedin from '../assets/youtube.png'
import Youtube from '../assets/google.png';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import '../style/Footer.css';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
export default function Footer() {
    return (
        <div style={{ border: "1px solid black" }}>
            <br></br>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                <Card border="danger" style={{ width: '18rem' }}>
                    <Card.Header>LEARN MORE</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        LNC is a leading food delivery and restaurant discovery platform that
                         allows you to explore a wide range of restaurants, order delicious food for 
                         delivery or pickup, and discover new culinary experiences in your city
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="danger" style={{ width: '18rem' }}>
                    <Card.Header>FOR RESTAURANTS</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Contact us on our provided numbers and contact details to join our joueny and also to add ypur resturant in our LNC website.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="danger" style={{ width: '18rem' }}>
                    <Card.Header>FOR ENTERPRISES</Card.Header>
                    <Card.Body>
                        <Card.Text>
                        LNC is a leading food delivery and restaurant discovery platform that 
                        allows you to explore a wide range of restaurants, order delicious food for delivery 
                        or pickup, and discover new culinary experiences in your city
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="danger" style={{ width: '18rem' }}>
                    <Card.Header>ABOUT US</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            View our about us page to know about us more and support us heartly.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <h2 class="mb-3" style={{ marginLeft: 7 }}>Social Media Links</h2>
            <div class="footer1" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }} >
                <Container>
                    <Row>
                        <Col>
                           <NavLink to="https://www.facebook.com/"><Image style={{ height: 50, width: 50 }} src={Facebook} thumbnail /></NavLink>
                        </Col>
                        <Col>
                        <NavLink to="https://www.linkedin.com/"><Image style={{ height: 50, width: 50 }} src={Instagram} thumbnail /></NavLink>
                        </Col>
                        <Col>
                        <NavLink to="https://www.google.com/"><Image style={{ height: 50, width: 50 }} src={Youtube} thumbnail /></NavLink>
                        </Col>
                        <Col>
                        <NavLink to="https://www.instagram.com/"> <Image style={{ height: 50, width: 50 }} src={Linkedin} thumbnail /></NavLink>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br></br>
            <div>
                <Card>
                    <Card.Body style={{textAlign:'center'}}>By continuing past this page, you agree to our Terms of Service,
                        Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of
                        their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved. </Card.Body>
                </Card>
            </div>
        </div>
    )
}
