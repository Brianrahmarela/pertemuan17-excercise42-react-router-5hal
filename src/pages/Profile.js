import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
function Profile() {
  let history = useHistory()
  //membuat param dari Route path="/profile/:name hal app.js
  // let params = useParams()
  //parambisa di destructor lgsg nama propertinya
  let {name} = useParams()
  console.log("HISTORY : ", history);
  console.log("PARAMS : ", name);

  // const changePage = () => {
  //   //history.push mirip dgn window.location.href
  //   history.push("/contact")
  // }

  return (
    <div>
      {/* <Picture name={name}/> */}
      <h1>Halaman Profile</h1>
      <h2>{name}</h2>
      {/* <button onClick={changePage}>Contact</button> */}
    </div>
  )
}

export default Profile
