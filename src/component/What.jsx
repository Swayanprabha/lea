import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import food from '../assets/food.jpg';
import what from '../assets/do.jpg';

function What() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {/* First Column */}
      <div style={{ flex: 1, }}>
        <Image src={what} fluid />
      </div>

      {/* Second Column */}
      <div style={{ flex: 1 }}>
        {['Secondary'].map((variant) => (
          <div key={variant}>
            <Card
              bg={variant.toLowerCase()}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '80%', height: '15rem', marginBottom: '10px' }}
            >
              <Card.Body>
                <Card.Text>
                  At Leave No Crumbs, we are passionate about creating extraordinary dining experiences. We specialize in meticulous attention to detail, ensuring that every dish we prepare and every event we cater is an unforgettable culinary journey. From innovative food presentations to impeccable service, our team is dedicated to crafting moments of culinary excellence. Whether it's an intimate dinner, a grand celebration, or a corporate event, we take pride in leaving no crumbs behind, delivering exceptional flavor, and creating memories that linger long after the last bite.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default What;
