import React from 'react';
import { useNavigate } from 'react-router-dom'

const Errror = () => {


    const history = useNavigate();

  return (
    <>
            <div className='container'>
            <div className=" d-flex flex-column justify-content-lg-center align-items-center">
                <h4 class="mt-3">KINDLY SIGNIN FIRST 😭</h4>
                <button className='btn btn-primary' onClick={()=>history("/LoginSignup")}>Redirect Login Page</button>
            </div>
        </div>
        <br></br>
        <br></br>
    </>
  )
}

export default Errror