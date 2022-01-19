import React from 'react';
import "./Experience.css";

export const Experience = ({ experience }) => {
  return (
      <div className='experience'>
      <h2 className='titulo'>Experiencia</h2>
          <div className='experience-card'>
              {experience.map((item) => {
                  return (
                      <div key={JSON.stringify(item)}>
                        <p className="name">{item.name}</p>
                        <p>{item.date}</p>
                        {/* <p>{item.where}</p> */}
                        <p>{item.description}</p>
                      </div>
                  )

              })}
          </div>
      </div>
  )

}


