import React from 'react'
import Card from 'react-bootstrap/Card';
import root from '../assets/rbg.png'
export default function Front() {
  return (
    <div>
        <Card>
        <Card.Img variant="top" src={root}/>
        <Card.Body>
          <Card.Text>
          <h2 style={{textAlign:"center",fontWeight:600,color:"red"}}>We are always here for you</h2>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
