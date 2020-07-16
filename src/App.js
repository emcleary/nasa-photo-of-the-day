import React, {useState, useEffect } from "react";
import "./App.css";
import styled from 'styled-components';

// Import other libraries
import axios from "axios";

// TODO: Add imports from closures.
import Photos from "./components/Photos/Photos.js";

const API_KEY = 'tbr3gyKUjFmIR3PwpzNcmTc0n7rvhsjOspoVWArz';

// STYLING
const StyledParagraph = styled.p`
font-size: 40px;
`;

// Contain photos on a flex-box
const StyledMain = styled.div`
display: flex;
flex-direction: column;
// border: 1px solid red;
`;

const StyledMainBoxes = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
align-items: center;
align-content: space-around;
div {
// border 1px solid blue;
height: 400px;
display: flex;
flex-direction: column;
justify-content: space-around;
}
`;


function App() {
  
  // state stuff
  const [photos, setPhotos] = useState([]);
  const [dates, setDates] = useState(["2020-07-14", "2020-06-13", "2020-05-12"]);
  // const [dates, setDates] = useState(["2020-07-14"]);
  
  // effects -- handle API call side effect
  useEffect( () => {
    axios.get(`https:api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        // debugger;
        console.log('collecting data worked!');
        setPhotos(res.data);
      })
      .catch(err => {
        // debugger;
        console.log('PhotoToday: collecting data failed....');
      });
  }, []); // TODO(?): Include "changed variable" to determine WHEN to do the effect.

  const PhotoToday = (props) => {
    if (!props.info) {
      return <h3>Loading....</h3>
    }
    console.log(props.info.url);
    return (
      <div className='photo'>
        <img src={props.info.url}/>
      </div>
    );
  };

  return (
    <div className="App">
      <StyledParagraph>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </StyledParagraph>
      {/*
      <div className="header-container">
        <PhotoToday key={photos.date} info={photos}/>
      </div>
      <div className="main">
      {
	dates.map( date => 
		   <Photos key={date} date={date}/>
		 )
      }
      </div>
       */}

      <div className="header-container">
        <PhotoToday key={photos.date} info={photos}/>
      </div>
      <StyledMain>
        <StyledMainBoxes>
          {
            dates.map( date => 
		       <Photos key={date} date={date}/>
                     )
          }
        </StyledMainBoxes>
      </StyledMain>
      
    </div>
  );
}

export default App;
