import { useState } from "react"

const App = () => {

  const [movie, setMovie] = useState({
    title: "Bigil",
    ratings: "8"
  })

  const clickHandler = () => {
    const copyMovie = {
      ...movie,
      ratings: 5
    }

    setMovie(copyMovie)
  }


  return ( 
    <div>
      <h1>Title: {movie.title}</h1>
      <p>Ratings: {movie.ratings}</p>
      <button onClick={clickHandler}>Update rating</button>
    </div>
  )
}

export default App 2:01:56