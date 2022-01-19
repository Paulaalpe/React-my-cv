import React from "react";
import "./Hero.css";

export const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt="" />
      <div className="card">
      <h2>
        {hero.name} {hero.surname}
      </h2>
        <p>{hero.city} </p>
        <p>{hero.birthDate}</p>
        <p>
          
          <a href={"mailto:" + hero.email}>
          paula.alvarez@bootcamp-upgrade.com
          </a>
        </p>
        <p> {hero.phone}</p>
        <p><a href={hero.gitHub}>
            GitHub
          </a></p>
        <p><a href={hero.myWeb}>
            www.bailar-madrid.es
          </a></p>
      </div>
    </div>
  );
};

export default Hero;