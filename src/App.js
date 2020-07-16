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
border-top: 10px solid black;
`;

const StyledMainBoxes = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
align-items: center;
align-content: space-around;
border-top: 10px solid black;
border-bottom: 10px solid black;
div {
// border 1px solid blue;
height: 450px;
display: flex;
flex-direction: column;
justify-content: space-around;

&:hover {
background-color: blue;
}
}
`;


function App() {
  
  // state stuff
  const [photos, setPhotos] = useState([]);
  const [dates, setDates] = useState(["2020-07-14", "2020-06-13", "2020-05-12"]);
  
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
  }, []);

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
        NASA's Astronomy Picture of the Day!
      </StyledParagraph>
      <div className="header-container">
        <PhotoToday key={photos.date} info={photos}/>
      </div>
      <StyledMain>
        <StyledParagraph>
          Previous APODs
        </StyledParagraph>
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
