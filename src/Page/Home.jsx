import React from 'react';
import Homecard from '../component/Homecard';
import RoundHome from '../component/RoundHome';
import HomeLongCard from '../component/HomeLongCard';
import HomeRes from '../component/HomeRes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from "react-router-dom";
import '../style/Stylehome.css';
import zomatologo from '../assets/logo2.jpg';
import Button from 'react-bootstrap/Button';
import Slide from '../assets/sign2.jpeg';
import { Nav, Navbar, Container, Carousel } from 'react-bootstrap';

export default function Home() {

  return (
    <>
      <div>
        <Carousel class="container1">
          <Carousel.Item>
            <img className="d-block" style={{ height: "70vh", width: "100vw" }} src={Slide} alt="image1" />
            <Carousel.Caption>
              <h3 style={{ color: "white", fontWeight: 500,fontSize:"30px" }}>Grab Your Favorites</h3>
              <p> <NavLink to="/LoginSignup"><Button variant="danger" size="sm" style={{ color: "white", fontWeight: 600,fontSize:"15px" }} >
          LOGIN TO SITE
        </Button></NavLink></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block" style={{ height: "70vh", width: "100vw" }} src="https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?cs=srgb&dl=pexels-lukas-616401.jpg&fm=jpg" alt="image2" />
            <Carousel.Caption>
              <h3 style={{ color: "black", fontWeight: 500,fontSize:"30px" }}>Explore The Dessert Land</h3>
              <p><NavLink to="/LoginSignup"><Button variant="dark" size="sm" style={{ color: "white", fontWeight: 600,fontSize:"15px" }} >
          LOGIN TO SITE
        </Button></NavLink> </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block" style={{ height: "70vh", width: "100vw" }} src="https://i.pinimg.com/736x/e6/7d/af/e67daf68a6e8f6d4a9283cb7d64b098c.jpg " alt="image3" />
            <Carousel.Caption>
              <h3 style={{ color: "white", fontWeight: 500,fontSize:"30px" }} >Enjoy Apetite</h3>
              <p>
              <NavLink to="/LoginSignup"><Button variant="dark" size="sm" style={{ color: "white", fontWeight: 600,fontSize:"15px" }} >
          LOGIN TO SITE
        </Button></NavLink>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Homecard />
      <RoundHome />
      <br></br>
      <HomeLongCard />
      <br></br>
      <HomeRes/>
    </>
  )
}
