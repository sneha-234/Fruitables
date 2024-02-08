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
    <div class="container-fluid py-5">
      <div class="container">
        <div class="bg-light p-5 rounded">
          <div class="row g-4 justify-content-center">
            {FACTS_DATA.map((data , index)=>
            {
                return (
                    <div  key ={index} class="col-md-6 col-lg-6 col-xl-3">
                    <div class="counter bg-white rounded p-5">
                      <FaUsers class="fa fa-users text-secondary" style={{height:"100" , width: "100"}}/>
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
