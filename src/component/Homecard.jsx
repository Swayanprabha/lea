import React from 'react';
import {Card,CardGroup} from 'react-bootstrap';

export default function Homecard() {
  return (
    <>
        <div class="container2 mt-4" style={{display:'flex'}}>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://b.zmtcdn.com/data/pictures/chains/1/18336901/a7f97508bd43ce39fa4f0ddf06b15c49_o2_featured_v2.jpg" />
        <Card.Body>
          <Card.Title class="cards">Cold & Hot</Card.Title>
          <Card.Text>
           The cosiest hidden gems serving the most
           incredible food, LNC covers it all. Explore menus, and millions of restaurant
            photos and reviews from users just like you, to find your next great meal.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src= "https://b.zmtcdn.com/data/pictures/6/19913706/0d4e5141402dde646f58e6660869be7e_o2_featured_v2.jpg"/>
        <Card.Body>
          <Card.Title class="cards">Yummy Pasta</Card.Title>
          <Card.Text>
          The cosiest hidden gems serving the most
           incredible food, LNC covers it all. Explore menus, and millions of restaurant
            photos and reviews from users just like you, to find your next great meal.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://b.zmtcdn.com/data/pictures/chains/1/18336901/a7f97508bd43ce39fa4f0ddf06b15c49_o2_featured_v2.jpg" />
        <Card.Body>
          <Card.Title class="cards">Popular Now</Card.Title>
          <Card.Text>
          The cosiest hidden gems serving the most
           incredible food, LNC covers it all. Explore menus, and millions of restaurant
            photos and reviews from users just like you, to find your next great meal.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://b.zmtcdn.com/data/pictures/6/19913706/0d4e5141402dde646f58e6660869be7e_o2_featured_v2.jpg" />
        <Card.Body>
          <Card.Title class="cards">Desi Tadka</Card.Title>
          <Card.Text>
          The cosiest hidden gems serving the most
           incredible food, LNC covers it all. Explore menus, and millions of restaurant
            photos and reviews from users just like you, to find your next great meal.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
    </>
  )
}
