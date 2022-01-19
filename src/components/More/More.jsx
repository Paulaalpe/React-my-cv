import React from 'react';
import "./More.css";

export const More = ({ languages, habilities, otros}) => {
  return (
        <div className='more'>
            <h2 className='titulo'>Idiomas</h2>
            <div className='languages card' key={languages.language}>
                <p><span>{languages.language}</span></p>
                <p><span>Nivel Escrito: </span>{languages.wrlevel}</p>
                <p><span>Nivel Hablado: </span>{languages.splevel}</p>
                <p><span>Titulaciones Oficiales: </span>{languages.certificado}</p>
            </div>

            <h2 className='titulo'>Habilidades</h2>
            <div className='habilities-card'>
                {habilities.map((txt) => (
                    <p >{txt}</p>
                ))}
            </div>

            <h2 className='titulo'>Otros</h2>
            <div className='otros card' >
                {otros.map((item) => {
                    return (
                        <div key={JSON.stringify(item)}>
                            <p className="name">❤ {item.name}</p>
                            <p>{item.where}</p>
                            <p>{item.description}</p>
                    </div>
                    );
                })}
        </div>
        </div>
    )
}

