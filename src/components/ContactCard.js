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
        <Link
          // to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          
          <div className="header"> <label>NAMES  :</label>&nbsp;{name}</div>
          <div> <label>email :</label>&nbsp;{email}</div>
        </Link>
        <div> <label>position  :</label>&nbsp;{position}</div>
        <div style={{display:"flex",justifyContent:"start"}}>
          <div>
          <label style={{textDecoration:"overline underline", backgroundColor: "black",
     color: "white"}}>tasks</label></div>
         <div> {task ? task.map((item,index)=>(<li>{item.todo}</li>)):null}</div></div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop:"7px" }}
        ></i>
      </Link>
      <Link to={{ pathname: `/addtask`, state: { contact: props.contact } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "green", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
