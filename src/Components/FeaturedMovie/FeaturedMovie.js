import React from "react";
import Button from "../Button/Button";
import "./FeaturedMovie.css";

const FeaturedMovie = ({ item }) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i = 0; i < item.genres.length; i++) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className='featured'
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className='featured--vertical'>
        <div className='featured--horizontal'>
          <div className='featured--name'>{item.original_name}</div>
          <div className='featured--info'>
            <div className='featured--points'>{item.vote_average} points</div>
            <div className='featured--year'>{firstDate.getFullYear()}</div>
            <div className='featured--seasons'>
              {item.number_of_seasons} season
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>
          <div className='featured--description'>{item.overview}</div>
          <div className='featured--buttons'>
            <Button url={"#"} title={"► Watch"} />
            <Button url={"#"} title={"+ My List"} />
          </div>
          <div className='featured--genres'>
            <strong>Genre{genres.length !== 1 ? "s" : ""}:</strong>{" "}
            {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
