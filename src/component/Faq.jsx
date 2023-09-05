import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'; 
import Faq from '../assets/faq.jpg';
import Image from 'react-bootstrap/Image';

function GroupExample() {
  return (
    <>
      <Image src={Faq} fluid style={{width:'100vh'}} /> {/* Correct the usage of Image */}
      <CardGroup>
        <Card>
          <Card.Header>General FAQ's</Card.Header>
          <Card.Body>
            <Card.Title>How do I download and install the app?</Card.Title>
            <Card.Text>
              You can download and install LNC by visiting the Google Play Store or Apple App Store on your Android or iOS device. Search for "<b>LNC</b>" and click "Install" to get started.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Ordering and Delivery FAQs</Card.Header>
          <Card.Body>
            <Card.Title>How do I place an order through LNC?</Card.Title>
            <Card.Text>
              Ordering through LNC is easy! Simply open the app, enter your location, browse restaurants, select dishes, and proceed to checkout. You can choose delivery or pickup.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Ordering and Delivery FAQs</Card.Header>
          <Card.Body>
            <Card.Title>What should I do if there's an issue with my order?</Card.Title>
            <Card.Text>
              If you encounter any issues with your order, please contact our customer support team through the app. We're here to assist you and ensure a great dining experience.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Account and Profile FAQs:</Card.Header>
          <Card.Body>
            <Card.Title>How do I create an account on LNC?</Card.Title>
            <Card.Text>
              To create an account, simply download the app, open it, and follow the registration prompts. You can sign up using your email address or social media accounts.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default GroupExample;
