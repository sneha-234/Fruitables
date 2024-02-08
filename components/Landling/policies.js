import React from "react";
import { FaCar, FaExchangeAlt, FaPhoneAlt, FaUserShield } from "react-icons/fa";

const Policies = (props) => {
  const {title, subtitle , icon} = props;
  return (
    
        
          <>
            
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  {icon}
                </div>
                <div className="featurs-content text-center">
                  <h5>{title}</h5>
                  <p className="mb-0">{subtitle}</p>
                </div>

          </>
  );
};

export default Policies;
