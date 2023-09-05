import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Error from '../Page/Error';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
const Account = () => {

  const [logindata, setLoginData] = useState([]);
  const history = useNavigate();
  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);
      const birth = logindata.map((el, k) => {
        return el.date
      });
    }
  }

  const userlogout = () => {
    localStorage.removeItem("user_login")
    history("/");
  }

  useEffect(() => {
    Birthday();
  }, [])

  return (
    <div>
      {
        logindata.length === 0 ? <Error/> :
          <>
            <h1 style={{fontSize:"3rem",color:"black",fontWeight:600,textAlign:"center",textDecoration:"2px red underline"}}>Welcome To Account Page</h1>
            <div>
              <Figure style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="user"
                  src="https://png.pngtree.com/png-vector/20190826/ourlarge/pngtree-user-png-image_1696429.jpg"
                />
                <Figure.Caption>
                  <p style={{color:"black",fontWeight:500,fontSize:"2rem",textShadow:"2px 2px solid red"}}>Hello User</p>
                  <p style={{color:"black",fontWeight:400,fontSize:"1.2rem"}}>Name:{logindata[0].name}</p>
                  <p style={{color:"black",fontWeight:400,fontSize:"1.2rem"}}>BirthDate:{logindata[0].date}</p>
                  <p style={{color:"black",fontWeight:400,fontSize:"1.2rem"}}>Your Mail Id:{logindata[0].email}</p>
                </Figure.Caption>
              </Figure>
            </div>
            <br></br>
      <br></br>
      <div>
            <Card className="text-center" style={{border:"2px solid black",borderRadius:4}}>
              <Card.Body>
                <Card.Title>Want To Logout????</Card.Title>
                <Card.Text>
                 Thank You For Visiting Our Website...
                </Card.Text>
                <Button variant="danger" onClick={userlogout}>LogOut</Button>
              </Card.Body>
            </Card>
            </div>
      </>
      }
    </div>
  )
}

export default Account
