import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function RoundHome() {
  return (
    <>
    <div class="Roundhome mt-4">
      <Container>
      <Row>
        <Col>
          <Image  style={{height:100,width:101}}src="https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187772.png?output-format=webp " roundedCircle />
        </Col>
        <Col>
          <Image style={{height:100,width:101}} src="https://b.zmtcdn.com/data/brand_creatives/logos/e8b5a9a0bef7eb95ccba03c7f01f9c7e_1611314338.png?output-format=webp" roundedCircle />
        </Col>
        <Col>
          <Image style={{height:100,width:101}} src="https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433084.png?output-format=webp" roundedCircle />
          </Col>
          <Col>
          <Image style={{height:100,width:101}} src="https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187772.png?output-format=webp" roundedCircle />
        </Col>
        <Col>
          <Image style={{height:100,width:101}} src="https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433084.png?output-format=webp" roundedCircle />
        </Col>
        <Col> 
          <Image style={{height:100,width:101}} src="https://b.zmtcdn.com/data/brand_creatives/logos/86d79de8394874f77218aacc17db3245_1521807124.png?output-format=webp" roundedCircle />
        </Col>
      </Row>
    </Container>
    </div>
    <h2 class="top mt-3" style={{textAlign:"center",fontWeight:600,textDecoration:"2px black underline"}}>Top brands for you</h2>
    </>
  )
}

