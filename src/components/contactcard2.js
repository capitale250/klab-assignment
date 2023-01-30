import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email ,position,task} = props.contact;
  console.log(id)
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        
          <div className="header">
            <label>NAMES  :</label>&nbsp;
            {name}
            </div>
          <div>
            
          <label>EMAIL  :</label>
            {email}</div>
        
        <div>
        <label>POSITION :</label>
            {position}</div>
        
    </div>
    </div>
  );
};

export default ContactCard;
