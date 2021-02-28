function Header(props) {
  console.log(props);
  return (
    <div style={{ display: "flex", justifyContent: "space-between"}}>
    <h1>Name: {props.char}</h1>
    <h1>Age: {props.age}</h1>
    <h1>Angka dari counter: {props.numberCounter}</h1>
    </div>
  )
}

export default Header;