import React, { useState, useEffect } from 'react';
import axios from "axios";


const API_KEY = 'tbr3gyKUjFmIR3PwpzNcmTc0n7rvhsjOspoVWArz';

export default function Photos(props) {
  const { date } = props;
  
  const [datePhoto, setDatePhoto] = useState([]);

  useEffect( () => {
    debugger;
    const url = `https:api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;
    axios.get(url)
      .then(res => {
        debugger;
        console.log('collecting photo data worked!');
        setDatePhoto(res.data);
      })
      .catch(err => {
        debugger;
        console.log('Photos: collecting data failed....');
      });
  }, []); // TODO(?): Include "changed variable" to determine WHEN to do the effect.
  
  const Photo = (props) => {
    if (!props.date) {
      return <h3>Loading....</h3>;
    }
    console.log(props.date.url);
    debugger;
    return (
      <div className='photo'>
        <img src={props.date.url} height="300px"/>
        <p>{props.date.title}</p>
      </div>
    );
  };
  

  return (
    <div className="main">
      <Photo key={date} date={datePhoto}/>
    </div>
  );
  
};
