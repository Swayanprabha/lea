import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Quality from '../assets/quality.jpg';
import Chef from '../assets/chef.png';
import Hyg from '../assets/hyg.jpg';
import Alert from 'react-bootstrap/Alert';
import Caw from '../assets/caw.jpg';
import Cca from '../assets/cca.jpg';
import Tra from '../assets/tra.jpg';
import Ara from '../assets/ara.jpeg';
import Vai from '../assets/vai.jpeg';
import Sat from '../assets/sat.jpeg';
import Tan from '../assets/tan.jpg';
import Adi from '../assets/adi.jpeg';
import Swa from '../assets/swa.jpeg';
import Card from 'react-bootstrap/Card';

export default function Fact() {
  return (
    <>
    <div style={{display:"flex",flexDirection:'column',justifyContent:"space-around"}}>
    <h2 style={{textAlign:"center",fontWeight:700,color:"black"}} class="mt-5">Your Health and Taste, Our Priority!"</h2>
     <div style={{display:'flex',justifyContent:"space-evenly"}} class="resturant">
      <Card style={{ width: '18rem', border:"none"}} class="Homerescards">
      <Card.Img variant="top" class="resturant" src={Quality} />
      <Card.Body>
        <Card.Title style={{color:"red",fontWeight:700}}>Quality Ingredients</Card.Title>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', border:"none"}} class="Homerescards">
      <Card.Img variant="top"class="resturant" src={Chef} />
      <Card.Body>
        <Card.Title style={{color:"black",fontWeight:700}}>Chef Expertise</Card.Title>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', border:"none"}} class="Homerescards">
      <Card.Img variant="top" class="resturant" src={Hyg} />
      <Card.Body>
        <Card.Title style={{color:"red",fontWeight:700}}>Hygiene Standards</Card.Title>
      </Card.Body>
    </Card>
    </div>
    <br></br>
    <h2 style={{textAlign:"center",fontWeight:700,color:"black"}} class="mt-5"> "We Want to Share Our Success with You, Because You've Lifted Us High!"</h2>
     <div style={{display:'flex',justifyContent:"space-evenly"}} class="resturant">
      <Card style={{ width: '18rem', border:"none"}} class="Homerescards">
      <Card.Img variant="top" class="resturant" src={Caw} />
      <Card.Body>
        <Card.Title style={{color:"red",fontWeight:700}}> Culinary Excellence Award</Card.Title>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', border:"none"}} class="Homerescards">
      <Card.Img variant="top"class="resturant" src={Cca} />
      <Card.Body>
        <Card.Title style={{color:"black",fontWeight:700}}> Customer Choice Award</Card.Title>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', border:"none"}} class="Homerescards">
      <Card.Img variant="top" class="resturant" src={Tra} />
      <Card.Body>
        <Card.Title style={{color:"red",fontWeight:700}}> Top-Rated App</Card.Title>
      </Card.Body>
    </Card>
    </div>
    </div>
    
    <div style={{display:"flex",flexDirection:'row',justifyContent:"space-evenly",marginTop:'20vh',border:'2px solid black',flexWrap:"wrap"}}>
        <br></br>
        <br></br>
     <div style={{display:"flex",flexDirection:'column'}}>
      <div>
      <Col>
          <Image  style={{height:100,width:101}}src={Ara} roundedCircle />
        </Col>
      </div>
      <div>
      <h6>ARADHANA DASH <p>(Founder)</p></h6>
      </div>
     </div>

     <div style={{display:"flex",flexDirection:"column"}}>
      <div>
      <Col>
          <Image  style={{height:100,width:101}}src={Vai} roundedCircle />
        </Col>
      </div>
      <div>
      <h6> VAISHNAVI SINGH <p>(Co-Founder)</p></h6>
      </div>
     </div>
     
     <div style={{display:"flex",flexDirection:"column"}}>
      <div>
      <Col>
          <Image  style={{height:100,width:101}}src={Sat} roundedCircle />
        </Col>
      </div>
      <div>
      <h6>SATYAM SWARUP ROUT <p>(HR)</p></h6>
      </div>
     </div>
     
     <div style={{display:"flex",flexDirection:"column"}}>
      <div>
      <Col>
          <Image  style={{height:100,width:101}}src={Tan} roundedCircle />
        </Col>
      </div>
      <div>
      <h6>TANISHKA SHARMA <p>(G- Financial Analyst)</p></h6>
      </div>
     </div>
     
     <div style={{display:"flex",flexDirection:"column"}}>
      <div>
      <Col>
          <Image  style={{height:100,width:101}}src={Adi} roundedCircle />
        </Col>
      </div>
      <div>
      <h6>ADITI DUBEY <p>( G-Marketing Manager)</p></h6>
      </div>
     </div>
     
     <div style={{display:"flex",flexDirection:"column"}}>
      <div>
      <Col>
          <Image  style={{height:100,width:101}}src={Swa} roundedCircle />
        </Col>
      </div>
      <div>
      <h6>SWAYANPRABHA PANDA <p>(G-Technical Analyst)</p></h6>
      </div>
     </div>
    </div>
    <h1 style={{textAlign:"center"}}>MEET OUR TEAM...</h1>
    </>
  )
}
