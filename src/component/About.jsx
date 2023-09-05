import React from 'react'; 
import food from '../Assets/food.jpg';
import service from '../Assets/services.jpg';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Review() { 
  return (
    <div>
      <Image src={food} fluid />
      <div style={{display:'flex', flexDirection:'row'}}>
        <div style={{margin:'30px'}}>
          {['Secondary'].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '24rem', height:'40rem' }}
              className="mb-8"
            >
              <Card.Header>Let's Inspire</Card.Header>
              <Card.Body>
                <Card.Title>{variant} OUR FOUNDING STORY</Card.Title>
                <Card.Text>
                  At "Leave No Crumbs," our journey began with two kindred spirits, Aradhana and Satyam. Both seasoned in their respective culinary crafts, they shared an unshakable passion for creating unforgettable dining experiences. Aradhana, a creative chef with a taste for innovation, and Satyam, a meticulous event planner, envisioned a venture that would blend the art of gastronomy with the magic of memorable gatherings. With a commitment to sourcing the finest ingredients, "Leave No Crumbs" was born, dedicated to crafting culinary perfection that leaves no detail overlooked. Our mission is simple: to make every meal a masterpiece, every bite a story, and every moment unforgettable. Today, our culinary adventure continues, inviting you to savor the magic of "Leave No Crumbs" and experience the extraordinary in every dish. Welcome to our world, where culinary artistry knows no bounds.
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div style={{textAlign:'center', width:'100%' , padding:'80px'}}>
          <Container>
            <Row>
              <Col xs={30} md={12}>
                <Image src={service} thumbnail />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Review;