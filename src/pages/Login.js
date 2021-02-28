
import React, { useState } from 'react'
import '../App.css';


function Register() {
  const [nameForm] = useState("tes tes");
  // console.log(nameForm);
  // const handleChange = (event) => {
  //   setnameForm(event.target.value)
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`halo ${nameForm}`);
  }
  console.log(nameForm);
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
      <form className="forms" onSubmit={handleSubmit} style={{ marginTop: "20px",textAlign: "center"}}>
        {/* <p>Nama : <input type="text" value={nameForm} onChange={handleChange}/></p> */}
        <p>Email: <input type="email" name="email"/></p>
      	<p>Password: <input type="password" name="password"/></p>
      	{/* <p>Biodata: <input type="biodata" name="biodata"/></p> */}
        <p><input type="submit" value="Submit" id="submit"/></p>
      </form>
      <h1>{nameForm}</h1> 
    </div>
  )
}

export default Register