import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetail = (props) => {
  const { name, email,position,task } = props.contacts;
  console.log(props)
  return (
    <div className="main">
      <div className="fledis">
      
      {/* {task ? task.map((item,index)=>(<li>{item.todo}</li>)):null} */}
      {props.contacts ? props.contacts.map((item)=>(
        <>
        <div className="ui card centered">
            <div className="image">
             <img src={user} alt="user" />
           </div>
           <div className="content">
             <div className="header">{item.name}</div>
             <div className="description">{item.email}</div>
           </div>
           <div>
          <label style={{textDecoration:"overline underline", backgroundColor: "black",
          color: "white"}}>tasks</label>
          {item.task ? item.task.map((items,index)=>(<li>{items.todo}</li>)):null}</div>
          </div>
        </>
       
      )):null}
          {/* </> */}
      </div>
      
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to employee List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
