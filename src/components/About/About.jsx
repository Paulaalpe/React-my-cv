import React from "react";
import "./About.css";

export const About = ({ hero }) => {
    return (
    <div className="about">
    
    <h2 className="titulo">Sobre mí</h2>
        <div className="about-card">
            {hero.aboutMe.map((item) => {
                return (
                    <div key={JSON.stringify(item)}>
                        <p>{item.info}</p>
                    </div>
                )
            })}
        </div>
    </div>
    );
};

