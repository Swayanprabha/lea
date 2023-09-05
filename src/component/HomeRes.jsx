import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function HomeRes() {
  return (
    <>
    <div style={{display:'flex',justifyContent:"space-evenly"}} class="resturant">
      <Card style={{ width: '18rem', border:"none"}} class="Homerescards">
      <Card.Img variant="top" class="resturant" src="https://b.zmtcdn.com/data/pictures/9/20504229/44f4c8c7541736e95dd7203eab8e9396_featured_v2.jpg" />
      <Card.Body>
        <Card.Title style={{color:"red",fontWeight:700}}>Chili's Grill & Bar</Card.Title>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', border:"none"}} class="Homerescards">
      <Card.Img variant="top"class="resturant" src="https://b.zmtcdn.com/data/pictures/6/18848926/3c85c2277ace8b0f2fe0826406c787c1_featured_v2.jpg" />
      <Card.Body>
        <Card.Title style={{color:"black",fontWeight:700}}>Truly Publik</Card.Title>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', border:"none"}} class="Homerescards">
      <Card.Img variant="top" class="resturant" src="https://b.zmtcdn.com/data/pictures/2/18805782/3cfcf08a6ba56e503314b8e874d430a2_featured_v2.jpg" />
      <Card.Body>
        <Card.Title style={{color:"red",fontWeight:700}}>Oppheem</Card.Title>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', border:"none"}} class="Homerescards">
      <Card.Img variant="top" class="resturant" src="https://b.zmtcdn.com/data/pictures/6/18848926/3c85c2277ace8b0f2fe0826406c787c1_featured_v2.jpg " />
      <Card.Body>
        <Card.Title style={{color:"black",fontWeight:700}}> Barbeque Nation</Card.Title>
      </Card.Body>
    </Card>
    </div>
     <h2 style={{textAlign:"center",fontWeight:700,color:"black"}} class="mt-5">Trending dining restaurants in Bhubaneswar</h2>
     </>
  )
}
