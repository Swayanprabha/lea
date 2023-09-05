import React from 'react';
import Card from 'react-bootstrap/Card';

export default function HomeLongCard() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"/>
        <Card.Body>
          <Card.Text>
          <h2 style={{textAlign:"center",fontWeight:600,color:"red"}}>Grab Grate Deals On DisCount</h2>
          </Card.Text>
        </Card.Body>
      </Card>
      </>
  )
}
