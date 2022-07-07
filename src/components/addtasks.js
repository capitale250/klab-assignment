import * as React from "react";
import api from "../api/contacts";

const Addtsk  = (props) => {
  const { id, name, email,position,tasks } = props.location.state.contact;

  React.useEffect(async()=>{
    console.log(props)
    const response = await api.get(`/contacts/${ props.location.state.contact.id}`);
    console.log(response.data.task)
    setData(response.data.task)
  },[])
  
  const [prod, setprod] = React.useState({task:""});
  const [data, setData] = React.useState("");
  const [input, setInput] = React.useState([]);

  // const onInputChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(value)
  //   setprod({ ...prod, [name]: value });
    
  // };
  // console.log(prod.task)

 const addtsk = (e) => {
    e.preventDefault();
    if (prod === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    const list={
      todo:input,
      isDone:false,
    }
    console.log(data)
    const updatetodo=[...data,list]
    const send = {
     task:updatetodo,
     id:props.location.state.contact.id,
     name:props.location.state.contact. name,
     email:props.location.state.contact.email,
     position:props.location.state.contact.position,
    };
     console.log(send)
    props.updateContactHandler(send);
    // this.setState({ task: ""});
    props.history.push("/");
  };
  // render() {
    return (
      <div className="ui main">
        <h2>add task</h2>
        <form className="ui form" onSubmit={addtsk}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="task"
              placeholder="task Name"
    
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              // onChange={(e) => onInputChange(e)}
            />
          </div>
         
          <button className="ui button blue">task</button>
        </form>
      </div>
    );
  }
// }

export default Addtsk;
