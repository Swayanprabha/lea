import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Resturant from '../Page/Resturant';
import { Link, NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const Cards = ({ data }) => {
    const history = useNavigate();
    return (
        <>
            {
             data.map((element, k) => {
                    return (
                        <>
                            <Card style={{ width: '22rem', border: "none" }} className="hove mb-4">
                                <Card.Img variant="top" className='cd' src={element.imgdata} />
                                <div className="card_body">
                                    <div className="upper_data d-flex justify-content-between align-items-center">
                                        <h4 className='mt-2'>{element.rname}</h4>
                                        <span>{element.rating}&nbsp;★</span>
                                    </div>

                                    <div className="lower_data d-flex  justify-content-between">
                                        <h5>{element.address}</h5>
                                        <span>{element.price}</span>
                                    </div>

                                    <div className="extra"></div>

                                    <div className="last_data d-flex justify-content-between align-items-center">
                                        <img src={element.arrimg} className="limg" alt="" />
                                        <p>{element.somedata}</p>
                                        <Link to="https://leavenocrumbs.netlify.app/"> <button type='button' style={{ borderRadius: 2, width: "4rem", fontWeight: 500 }}>Visit</button>
                                        </Link>
                                    </div>
                                </div>
                            </Card >
                        </>
                    )
                })
            }

        </>
    )
};
export default Cards;
