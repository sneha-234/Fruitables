import React from "react";
import {  FaUsers } from "react-icons/fa";


const FACTS_DATA = [
    {
        title : "satisfied customers",
        subtitle : "1963",
    },
    {
        title : "quality of service",
        subtitle : "99%",
    },
    {
        title : "quality certificates",
        subtitle : "33",
    }
    ,
    {
        title : "Available Products",
        subtitle : "789",
    }
]
const Fact = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="bg-light p-5 rounded">
          <div className="row g-4 justify-content-center">
            {FACTS_DATA.map((data , index)=>
            {
                return (
                    <div  key ={index} className="col-md-6 col-lg-6 col-xl-3">
                    <div className="counter bg-white rounded p-5">
                      <FaUsers className="fa fa-users text-secondary" style={{height:"100" , width: "100"}}/>
                      <h4>{data.title}</h4>
                      <h1>{data.subtitle}</h1>
                    </div>
                  </div>

                )

                
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fact;
