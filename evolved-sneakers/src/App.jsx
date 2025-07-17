import { useState } from "react"

const App = () => {
  
  const [name, setName] = useState(["Darr", "King"]);
  const updatePerson = () => {
    setName(name.map(n=>(
      n=== "Darr" ? "Darrrr" : n
    )))
  }

  return(
    <div>
      <h1>
        <ul>
          {name.map(n=>(
            <li key={Math.random()}>{n}</li>
          ))}
        </ul>
        <button onClick={updatePerson}>Update Darr</button>
      </h1>
    </div>
  );
}

export default App