import React, {useState, useEffect } from "react";
import "./App.css";

// Import other libraries
import axios from "axios";

// TODO: Add imports from closures.
import Photos from "./components/Photos/Photos.js";

function App() {
  
  // state stuff
  const [photos, setPhotos] = useState([]);
  // const [dates, setDates] = useState(["2020-07-14", "2020-07-13", "2020-07-12"]);
  const [dates, setDates] = useState("2020-07-14");
  const [datePhoto, setDatePhoto] = useState([]);
  
  // effects -- handle API call side effect
  useEffect( () => {
    axios.get('https:api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        // debugger;
        console.log('collecting data worked!');
        setPhotos(res.data);
      })
      .catch(err => {
        // debugger;
        console.log('collecting data failed....');
      });
  }, []); // TODO(?): Include "changed variable" to determine WHEN to do the effect.

  const PhotoToday = (props) => {
    return (
      <div className='photo'>
        <img src={props.info.url}/>
      </div>
    );
  };


  useEffect( () => {
    debugger;
    const url = `https:api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dates}`;
    axios.get(url)
      .then(res => {
        debugger;
        console.log('collecting photo data worked!');
        setDatePhoto(res.data);
      })
      .catch(err => {
        debugger;
        console.log('collecting data failed....');
      });
  }, []); // TODO(?): Include "changed variable" to determine WHEN to do the effect.
  
  const Photo = (props) => {
    debugger;
    if (!props.date) {
      return <h3>Loading....</h3>
    }
    return (
      <div className='photo'>
        <img src={props.date.url}/>
      </div>
    );
  };
  
  return (
    <div className="App">
    {/*
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
     */}
      <div className="header-container">
        <PhotoToday key={photos.date} info={photos}/>
      </div>
      <div className="main">
        <Photo key={datePhoto.date} date={datePhoto}/>
      </div>
    </div>
  );
}

export default App;
