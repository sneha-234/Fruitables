import React from "react";
import { FaCar ,FaUserShield, FaExchangeAlt, FaPhoneAlt} from "react-icons/fa";
import Policies from "./policies";

const FETURED_DATA = [
  {
    title: "Free Shipping",
    subtitle: "Free on order over $300",
    icon: <FaCar className="fas fa-car-side fa-3x text-white"  style={{height: "60px" , width : "70px"}}/>,
  },

  {
    title: "Security Payment",
    subtitle: "100% security payment",
    icon: <FaUserShield className="fas fa-user-shield fa-3x text-white" style={{height: "60px" , width : "70px"}}/>
  },
  {
    title: "Day Return",
    subtitle: "30 day money guarantee",
    icon: <FaExchangeAlt className="fas fa-exchange-alt fa-3x text-white" style={{height: "60px" , width : "70px"}}/>
  },

  {

    title: "24/7 Support",
    subtitle: "Support every time fast",
    icon: <FaPhoneAlt className="fa fa-phone-alt fa-3x text-white " style={{height: "60px" , width : "70px"}}/>
  }
];

const Policy = () => {
  return (
    <div className="container-fluid featurs py-5">
      <div className="container py-5">
        <div className="row g-4">

            
                {FETURED_DATA.map ((data ,index)=>
                {
                    return(
                        <div key= {index} className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                        <Policies
                        title={data.title}
                        subtitle={data.subtitle}
                        icon={data.icon}
                        />
                        </div>
                        </div>
                    )
                })}
              </div>
            </div>
          </div>

  );
};

export default Policy;
