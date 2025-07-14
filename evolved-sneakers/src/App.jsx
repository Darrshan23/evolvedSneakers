const Button = () => {
  return <button onClick={()=>console.log('You clicked Me!')}>Click Me</button>
}

const App = () => {
  return (
    <Button />
  )
}

export default App