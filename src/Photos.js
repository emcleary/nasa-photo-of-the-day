import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Photos(props) {
  const { date } = props;
  const [photo, setPhoto] = useState();

  // change date --> collect/set new data
  useEffect(() => {
    axios.get(`https:api.nasa.gov/planetary/apod?api_key=DEMO_KEY&${date}`)
      .then(res => {
        debugger;
        console.log('Photo: collecting data worked!!!');
        setPhoto(res.data);
      })
      .catch(err => {
        debugger;
        console.log('Photo: collecting data failed...');
      });
  }, [date]);

  const X = (props) => {
    return <img src={props.info.url}/>;
  };


  // {/*
  //    <Photo key={date} info={photo}/>
  //  */}
  return (
    <h1>here</h1>
      <div className='here'>
      </div>
  );
  
};
