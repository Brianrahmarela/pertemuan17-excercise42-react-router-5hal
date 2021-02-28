
function Counter(props) {


  return(
    <div>
    <h1>Counter hoooks</h1>
      <button onClick={props.decrease}>-</button>
      <span>{props.number}</span>
      <button onClick={props.increaseTesProps}>+</button>
    </div>
  )
}

export default Counter;