import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fooddata from '../component/Fooddata';
import { useState } from 'react';
import { useEffect } from 'react';
import zomatologo from '../assets/leave.png';
import Form from 'react-bootstrap/Form';
import Cards from '../Page/Cards';
import '../style/Search.css';

 const Search=()=> {
    
  const [copydata, setCopyData] = useState([]);
  const [fdata, setFdata] = useState(Fooddata);

  const chanegData = (e) => {
    let getchangedata = e.toLowerCase();

    if (getchangedata == "") {
        setCopyData(fdata);
    } else {
        let storedata = copydata.filter((ele, k) => {
            return ele.rname.toLowerCase().match(getchangedata);
        });

        setCopyData(storedata)
    }
}
useEffect(() => {
      setCopyData(Fooddata);
}, [])


  return (
    <>
     <div className="container d-flex justify-content-between align-items-center">
                <img src={zomatologo} style={{ width: "10rem", position: "relative", left: "4%",marginTop:"2vh" }} alt="" />
            </div>
            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                    <Form.Control type="text" style={{border:"2px solid black"}}
                        onChange={(e) => chanegData(e.target.value)}
                        placeholder="Search Resturant 🔍" />
                </Form.Group>
            </Form>
            <br></br>
            <h2 style={{ color: "#1b1464", cursor: "pointer",textAlign:"center",textDecoration:" 2px red underline" }} className="mt-2">Explore Resturants of ur town</h2>
            <section className='iteam_section mt-5 container'>
                <h2 className='px-4' style={{ fontWeight: 400, color: "#1b1464" }}>Restaurants in Bhubaneswar Open now</h2>

                 <div className="row mt-2 d-flex justify-content-around align-items-center">
                    {copydata && copydata.length ? <Cards data={copydata}/> : <h2 style={{textAlign:"center"}}>"No match found"</h2>}
                 </div> 
            </section>

    </>
  )
}
export default Search;
