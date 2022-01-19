import './App.css';
import { useState } from "react";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About"
import { Education } from "./components/Education/Education"
import { Experience } from "./components/Experience/Experience"
import { More } from "./components/More/More"
import { CV } from "./CV/Cv";


const { hero, education, experience, languages, habilities, otros } = CV; 

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
    <h1>My Cv</h1>
    <Hero hero={hero} />
    <About hero={hero} />
    <button
      className='btn1'
      onClick={() => setShowEducation(true)}   
      >Formación
    </button>
    <button
      className='btn1'
      onClick={() => setShowEducation(false)}   
      >Experiencia
    </button>
    <div>
      {showEducation ? (
        <Education education={education} />
      ) : (
        <Experience experience={experience} />
      )}
    </div>

    <More
    languages={languages}
    habilities={habilities}
    otros={otros}
    /> 
    </div>
  );
}

export default App;
