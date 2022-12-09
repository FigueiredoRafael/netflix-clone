import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./Components/MovieRow/MovieRow";
import "./App.css";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Getting Api Data
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };
    loadAll();
  }, []);

  return (
    <div className='page'>
      <section className='lists'>
        {movieList.map((item, index) => (
          <MovieRow key={index} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};

export default App;
