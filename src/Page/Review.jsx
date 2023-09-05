import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Faq from '../component/Faq';
import Team from '../component/Team';
import What from '../component/What';
import Front from '../component/Front';
import Fact from '../component/Fact';

export default function Review() {
  return (
    <div>
      <Front/>
        <What /><br></br>
        <Faq /><br></br>
        <Fact/> <br></br>
        <h3>For more Queries you can CONTACT US-</h3><br></br>
        <Team />
    </div>
  )
}
