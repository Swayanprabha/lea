import React from 'react';

import Card from 'react-bootstrap/Card';
import Help from '../assets/help.png';


function BgColorExample() {
  return (
    <>
      {['Light'].map((variant) => (
        <div style={{ justifyContent: 'space-evenly', display: 'flex', flexDirection: 'row', flexWrap: "wrap" }}>
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>Contact Us</Card.Header>
            <Card.Body>
              <Card.Title>{variant} Customer Support</Card.Title>
              <Card.Text>
                If you have an issue with your order, need assistance with our app, or have general inquiries, our
                dedicated customer support team is here to help.
                <b>Email: support@leavenocrumb.com</b><br />
                <b>Phone: +1-123-456-7890</b><br />
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>Contact Us</Card.Header>
            <Card.Body>
              <Card.Title>{variant} Restaurant Inquiries</Card.Title>
              <Card.Text>
                Are you a restaurant owner interested in partnering with us or updating your restaurant listing? Our
                restaurant relations team is ready to assist.
                <b>Email: restaurants@leavenocrumb.com</b><br />
                <b>Phone: +1-987-654-3210</b><br />
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>Contact Us</Card.Header>
            <Card.Body>
              <Card.Title>{variant} Media and Press</Card.Title>
              <Card.Text>
                For media inquiries, press releases, or collaboration opportunities, please contact our media relations
                team.
                <b>Email: media@leavenocrumb.com</b><br />
                <b>Phone: +1-555-123-4567</b><br />
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="mb-2">
            <Card.Img variant="top" src={Help} />
          </Card>
        </div>
      ))}
    </>
  );
}

export default BgColorExample;
