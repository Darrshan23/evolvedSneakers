import { useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(1);
  const [friends, setfriend] = useState(['Darrshan', 'Cy']);
  const [movie, setMovie] = useState({
    name: 'Avatar',
    ratings: 10,
  });
  const [movies, setMovies] = useState([
    { id: 1, title: 'Spider Man', ratings: 8 },
    { id: 2, title: 'Iron Man 3', ratings: 10 },
    { id: 3, title: 'The Incredible Hulk', ratings: 7 },
  ]);

  const addOne = () => setNumber(number + 1);
  const addRaj = () => setfriend([...friends, 'Raj']);
  const deleteRaj = () =>
    setfriend(friends.filter((friend) => friend !== 'Raj'));
  const updateRaj = () => {
    setfriend(friends.map((friend) => (friend == 'Raj' ? 'Raja' : friend)));
  };
  const changeRating = () => {
    // Longer way
    // const copyMovie = {
    //   ...movie,
    //   ratings: 5,
    // };

    //setMovie(copyMovie);

    //Shorter way
    setMovie({ ...movie, ratings: 5 });
  };
  const nameChange = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...movies, title: 'John Wick' } : m))
    );
  };

  return (
    <div>
      <h1 onClick={addOne}>{number}</h1>
      <hr />
      <ul>
        {friends.map((friend) => (
          <li key={Math.random()}>{friend}</li>
        ))}
      </ul>
      <button onClick={addRaj}>Add Raj</button>
      <button onClick={deleteRaj}>Delete Raj</button>
      <button onClick={updateRaj}>Update Raj</button>
      <hr />
      <h1>Name: {movie.name}</h1>
      <p>Ratings: {movie.ratings}</p>
      <button onClick={changeRating}>Change rating to 5</button>
      <hr />
      {movies.map(({ id, title, ratings }) => (
        <ul key={id}>
          <li>Title: {title}</li>
          <li>Ratings: {ratings}</li>
        </ul>
      ))}
      <button onClick={nameChange}>Change Name</button>
    </div>
  );
};

export default App;
