import React, {useState, useEffect } from "react";
import "./App.css";

// Import other libraries
import axios from "axios";

// TODO: Add imports from closures.

function App() {
  
  // state stuff
  const [photos, setPhotos] = useState([]);

  // effects -- handle API call side effect
  useEffect( () => {
    axios.get('https:api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        debugger;
        console.log('collecting data worked!');
        setPhotos(res.data);
      })
      .catch(err => {
        debugger;
        console.log('collecting data failed....');
      });
  }, []); // TODO(?): Include "changed variable" to determine WHEN to do the effect.

  const Photo = (props) => {
    debugger;
    return (
      <div className='photo'>
        {/*
          //<h3>INSERT PHOTO HERE</h3>
          //<h3>{props.info.date}</h3>
        */}
        <img src={props.info.url}/>
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
      <Photo key={photos.date} info={photos}/>
    </div>
  );
}

export default App;
