
import {useState, useEffect} from "react";
import PropTypes from "prop-types";


function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() =>{
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {loading ? <h1>loading...</h1> : <div>{movies.map(movie => <div key={movie.id}>{movie.title}</div>)}</div>}
    </div>
  )
    
}

export default App;
Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  generes: PropTypes.arrayOf(PropTypes.string).isRequired,
}