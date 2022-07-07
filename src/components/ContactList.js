import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
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

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "My Awesome Report";
    const headers = [["NAME", "EMAIL","POSITIONS"]];

    const data = props.contacts.map(elt=> [elt.name, elt.email,elt.position]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf")
  }


  return (
    <div className="main">
      <h2>
        employee List
        <Link to="/add">
          <button className="ui button blue right">Add employee</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
      <div>
        <button onClick={() => exportPDF()}>Generate Report</button>
      </div>
      <div>
      <button >
          {props.contacts?.length &&
            <CSVLink
              headers={fileHeaders}
              data={props.contacts}
              filename="results.csv"
              target="_blank"
            >
              Export
            </CSVLink>
          }
          </button>
  </div>
    </div>
  );
};

export default ContactList;
