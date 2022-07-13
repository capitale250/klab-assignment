import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/contacts";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import Addtsk from "./addtasks";
import Login from "./login"
import Signup from "./singup"
import jsPDF from "jspdf";
import "jspdf-autotable";
import { connect, useDispatch, useSelector  } from 'react-redux';
import {fetchusers} from '../redux/actions/fetchemployees';


function App(props) {

  const [contacts, setContacts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    
    const getAllCOntacts = async () => {
      // const allContacts = await retrieveContacts();
      await handleemployees ()
      if (props.userState.users) setContacts(props.userState.users);
    };
    handleemployees ()
    getAllCOntacts();
  }, []);


  const handleemployees = async () => {
    dispatch(fetchusers())
 }
 console.log(props.userState.users)
 console.log(contacts)

  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      task:[],
      ...contact,
    };

    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };
  const addtaskhandle = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "My Awesome Report";
    const headers = [["NAME", "EMAIL","ROLE"]];

    const data = contacts.map(elt=> [elt.name, elt.email,elt.position]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report.pdf")
  }

  
  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          />
           <Route
            path="/allemployee"
            exact
            render={(props) => (
              <ContactDetail
                // {...props}
                contacts={contacts}
               
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />
           <Route
            path="/addtask"
            render={(props) => (
              <Addtsk
                {...props}
                updateContactHandler={addtaskhandle}
              />
            )}
          />

          <Route path="/contact/:id" component={ContactDetail} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

// export default App;
const mapStateToProps = (fetchuserss) => {
  return {
  userState:fetchuserss.fetchusers,
}}

export default connect(mapStateToProps, { fetchusers })(App) 
