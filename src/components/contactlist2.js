import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./contactcard2";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { CSVLink } from "react-csv";

const ContactList = (props) => {
  console.log(props);
  const [fileHeaders] = useState([
    {label: 'Email', key: 'email'},
    {label: ' Name', key: 'name'},
    {label: 'Position', key: 'position'},
  
  ])
  ;

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  // console.log(props.userState)

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  

  return (
    <div className="main">
      <h2>
        employee List
        <Link to="/add">
          <button className="ui button blue right">Add employee</button>
        </Link>
        <Link to="/">
          <button className="ui button blue right">logout</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>

  </div>
    
  );
};

export default ContactList;
