const Button = () => {
  const handleClick = () => console.log(Math.round(Math.random()*10))

  return <button onClick={handleClick}>Click Me</button>
}

const Copy = () => {
  return <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, porro impedit illo in iure repudiandae blanditiis assumenda sapiente sed exercitationem?</p>
}

const App = () => {
  return (
    <Button />
  )
}

export default App

