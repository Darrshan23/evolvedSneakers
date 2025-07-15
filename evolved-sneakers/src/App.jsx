const Button = () => {
  const handleClick = () => console.log(Math.round(Math.random()*10))

  return <button onClick={handleClick}>Click Me</button>
}

const Copy = () => {
  const copyHandler = () => {
    console.log("Stopp!!")
  }
  
  return <p onCopy={copyHandler}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, aperiam dicta maiores qui deleniti tenetur similique iste officia reprehenderit. Voluptate?</p>
}

const Move = () => {
  function moveHandler () {
    alert('Move moved event fired');
    console.log('Move moved event fired')
  }

  return <p onMouseMove={moveHandler}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consectetur similique animi quisquam alias assumenda delectus fuga aut esse sint?</p>
}

const App = () => {
  return (
    <section>
      <Button />
      <Copy />
      <Move />
    </section>
  )
}1.47.58

export default App

