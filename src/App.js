import React, { useEffect } from "react";
import Tmdb from "./Tmdb";

const App = () => {
  useEffect(() => {
    const loadAll = async () => {
      // Getting Api Data
      let list = await Tmdb.getHomeList();
      console.log("list: ", list);
    };

    loadAll();
  }, []);

  return <div>Hello world</div>;
};

export default App;
