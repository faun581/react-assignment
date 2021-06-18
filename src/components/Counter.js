import Button from "./Button"

const Counter = ({count, onInc, onDec, incOdd, asyInc, play, showStop}) => {
  return (
    <>
      <h3>{count}</h3>
      <Button text='Increment' onClick={onInc} />
      <Button text='Decrement' onClick={onDec} />
      <br></br>
      <Button text='Increment-If-Odd' onClick={incOdd} />
      <Button text='Async-Inc' onClick={asyInc} />
      <br></br>
      <Button 
        text={showStop ? 'Stop' : 'Start'}
        color={showStop ? 'red' : 'green'}
        onClick={play} />
    </>
  )
}

export default Counter