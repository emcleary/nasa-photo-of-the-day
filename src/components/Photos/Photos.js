import React, { useState, useEffect } from 'react';
import axios from "axios";


const API_KEY = 'tbr3gyKUjFmIR3PwpzNcmTc0n7rvhsjOspoVWArz';

export default function Photos(props) {
  const { date } = props;

  const [thisDate, setThisDate] = useState(date);
  const [datePhoto, setDatePhoto] = useState([]);

  useEffect( () => {
    const url = `https:api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${thisDate}`;
    axios.get(url)
      .then(res => {
        console.log('collecting photo data worked!');
        setDatePhoto(res.data);
      })
      .catch(err => {
        console.log('Photos: collecting data failed....');
      });
  }, [thisDate]);

  function addZero(num) {
    if (num < 10) {
      num = '0'+num.toString();
    }
    return num
  }
  
  function getNewDate(e) {
    debugger;
    e.preventDefault();
    const dateSplit = datePhoto.date.split('-');
    const year = 1990 + Math.floor(Math.random()*29); // 1990 - 2019
    dateSplit[0] = year;
    let month = Math.ceil(Math.random()*12); // 1 - 12
    month = addZero(month);
    dateSplit[1] = month;
    let day = Math.ceil(Math.random()*28); // 1 - 28
    day = addZero(day);
    dateSplit[2] = day;
    const date = dateSplit.join('-');
    setThisDate(date);
  };

  const Photo = (props) => {
    if (!props.date) {
      return <h3>Loading....</h3>;
    }
    return (
      <div className='photo' onClick={getNewDate}>
        <img src={props.date.url} height="300px" />
        <p>{props.date.title}</p>
        <p>{props.date.date}</p>
      </div>
    );
  };

  return (
    <div className="main">
      <Photo key={date} date={datePhoto}/>
    </div>
  );
  
};
