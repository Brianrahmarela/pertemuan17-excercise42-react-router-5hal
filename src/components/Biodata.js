import React from 'react'

function Biodata(props) {
  return (
    <div>
      <h1>{props.nama.toUpperCase()}</h1>
      <button onClick={props.changeNameTesProps}>Change Name to Impact Byte</button>
    </div>
  )
}

export default Biodata;
