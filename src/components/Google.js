import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import Popup from 'reactjs-popup';
import googlelogo from '../images/googlelogo.png';
import r0 from '../images/googleresult0.jpg';
import r1 from '../images/googleresult1.jpg';
import r2 from '../images/googleresult2.jpg';
import r3 from '../images/googleresult3.jpg';

// TODO
// Fix the CSS to properly vertically align the search icon/textarea

function Google(props) {
  const [popupNumber, setPopupNumber] = useState(0);
  const [imageNumber, setImageNumber] = useState(0);
  const [searchBarClicked, setSearchBarClicked] = useState(true);
  const [didSearch, setDidSearch] = useState(false);
  
  const images = [
    r0,
    r1,
    r2,
    r3
  ]

  const popups = [
    // 0
    <Popup
        open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
          contentStyle={{
            position: "fixed",
            top: "6vh",
            right: "6vh"
          }}
          >
          <h2>Welcome to Google!</h2>
          <p>Google is the world’s most widely used search engine - a website that allows you to search for nearly anything online!</p>
          <p>Whether it's the latest news, yummy cooking recipes, interesting trivia, or more, you can find it using a search engine like Google.</p>
          <button class="initial-button" onClick={() => setPopupNumber(1)}>Click here to proceed</button>
      </Popup>,
      // 1
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        top: "6vh",
        right: "6vh"
      }}
        >
        <p>
          Let’s show an example of how you would normally use google!
        </p>
        <p>Let's pretend you wanted to learn how to bake chocolate chip cookies</p>
        <button class="previous-button" onClick={() => setPopupNumber(0)}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(2); setSearchBarClicked(false)}}>Click here to proceed</button>
      </Popup>,
      // 2
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        top: "6vh",
        right: "6vh"
      }}
      overlayStyle={{
        "pointer-events": "none",
        background: "rgb(255, 255, 255, 0)"
      }}
        >
        <p>
          First, move your mouse to the search bar (outlined in red) and click on it.
        </p>
      </Popup>,
      // 3
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        top: "6vh",
        right: "6vh"
      }}
      overlayStyle={{
        "pointer-events": "none",
        background: "rgb(255, 255, 255, 0)"
      }}
        >
        <p>
          Now, use your keyboard to type the following:
        </p>
        <p>"chocolate chip cookie"</p> 
        <p>After typing that, either press the "enter" key on your keyboard or press the button labled "Google Search"</p>
      </Popup>,
      // 4
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        top: "6vh",
        right: "6vh"
      }}
      overlayStyle={{
        "pointer-events": "none",
        background: "rgb(255, 255, 255, 0)"
      }}
        >
        <p>
          Uh oh, you made a spelling error! On the plus side, if the error is minor, Google will normally be able to tell what you meant to type and correct it. However, for now, make sure you type the following with correct spelling:
        </p>
        <p>"chocolate chip cookie"</p>
      </Popup>,
      // 5
      <Popup
        open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
          contentStyle={{
            position: "fixed",
            top: "6vh",
            right: "6vh"
          }}
          >
          <p>Great! Now, you typed in your search correctly, let's see what happens next!</p>
          <button class="initial-button" onClick={() => {setDidSearch(true); setPopupNumber(6)}}>Click here to proceed</button>
      </Popup>, 
      // 6
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        top: "6vh",
        right: "6vh"
      }}
      overlayStyle={{
        "pointer-events": "none",
        background: "rgb(255, 255, 255, 0)"
      }}
        >
        <p>
          This is what shows up when you search "chocolate chip cookie" on Google.
        </p>
        <button class="initial-button" onClick={() => {setPopupNumber(7); setImageNumber(1)}}>Click here to proceed</button>
      </Popup>,
      // 7
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        top: "6vh",
        right: "6vh"
      }}
      overlayStyle={{
        "pointer-events": "none",
        background: "rgb(255, 255, 255, 0)"
      }}
        >
        <p>The circled texts are all different results given by the Google search.</p>
        <p>Each result is a different website with different information on them, you can click on the larger blue text to take you to the associated website.</p>
        <p>The blue text is called a "link", which often appears like <Link>this</Link>. It will normally appear blue if it's a link you have not clicked on before, and purple if you have clicked on it previously. Also, if you move your mouse over it, your cursor changes to let you know you can click on it.</p>
        <button class="previous-button" onClick={() => {setPopupNumber(6); setImageNumber(0)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(8); setImageNumber(2)}}>Click here to proceed</button>
      </Popup>,
      // 8
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        top: "6vh",
        left: "6vh"
      }}
      overlayStyle={{
        "pointer-events": "none",
        background: "rgb(255, 255, 255, 0)"
      }}
        >
        <p>For some searches, Google will also display additional information in the area circled in red. This is often a short summary of information on what you searched.</p>
        <p>Normally, this information will be taken from a website like Wikipedia (another great website for finding information on various things!).</p>
        <button class="previous-button" onClick={() => {setPopupNumber(7); setImageNumber(1)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(9);setImageNumber(0)}}>Click here to proceed</button>
      </Popup>,
      // 9
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        top: "6vh",
        left: "6vh"
      }}
      overlayStyle={{
        "pointer-events": "none",
        background: "rgb(255, 255, 255, 0)"
      }}
        >
        <p>In addition to searching for websites, Google also lets you search for images and videos! Let's see how.</p>
        <button class="previous-button" onClick={() => {setPopupNumber(8); setImageNumber(2)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(10); setImageNumber(3)}}>Click here to proceed</button>
      </Popup>,
      // 10
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        bottom: "6vh",
        left: "6vh"
      }}
      overlayStyle={{
        "pointer-events": "none",
        background: "rgb(255, 255, 255, 0)"
      }}
        >
        <p>To search for images or videos, you perform your search as you normally would initially.</p>
        <p>Then, for images, you click on the circled button with the word "images" on it, and you would do the same for searching for videos.</p>
        <button class="previous-button" onClick={() => {setPopupNumber(9); setImageNumber(0)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(11); setImageNumber(0)}}>Click here to proceed</button>
      </Popup>,
      // 11
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        bottom: "6vh",
        left: "6vh",
        width: "50%",
      }}
        >
        <p>That's the essentials of how to use Google!</p>
        <button class="previous-button" onClick={() => {setPopupNumber(10); setImageNumber(3)}}>Click here to go back</button>
        <Link to="/"><button class="next-button">Click here to go back to the home page</button></Link>
      </Popup>,
  ]

  function handleSubmit(e) {
    e.preventDefault();
    let s = e.target.search.value.toLowerCase().trim();
    console.log("handleSubmit called!");
    if (popupNumber === 3 || popupNumber === 4) {
      if (s !== "chocolate chip cookie") {
        setPopupNumber(4);
      } else {
        setPopupNumber(5);
      }
    }
  }

  function onSearchFocus(e) {
    console.log("onSearchFocus called!");
    if (popupNumber === 2 || popupNumber === 4) {
      setPopupNumber(3);
      setSearchBarClicked(true)
    }
  }

  function onSearchUnfocus(e) {
    console.log("onSearchUnfocus called!");
    // only change color if on the right section and if they aren't clicking on the search button
    if ((popupNumber === 3 || popupNumber === 4) && (!e.relatedTarget || e.relatedTarget.value !== "Google Search")) {
      setPopupNumber(2);
      setSearchBarClicked(false)
    }
  }

  if (!didSearch) {
    // before user types in correct search
    return (
      <div>
        <div class="google-content">
          <img id="google-logo" alt="googles logo" src={googlelogo}/>
          <br/>
          <form onSubmit={handleSubmit}>
            <div className={searchBarClicked ? "google-textarea google-outline-grey" : "google-textarea google-outline-red"}>
              <div class="google-search-icon">
                <label for="search">
              <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                </path>
              </svg>
              </label>
              </div>
              <input type="text" name="search" id="search" onFocus={onSearchFocus} onBlur={onSearchUnfocus}/>
            </div>
                    <br/>
                    <input class="google-button" type="submit" value="Google Search"/>
                    <input class="google-button" type="button" value="I'm Feeling Lucky"/>
          </form>

          {popups[popupNumber]}
          
        </div>

          
      </div>
    );
  } else {
    // after user types in correct search
    return (
      <div>
        <img class="google-result" role="presentation" src={images[imageNumber]} />
        {popups[popupNumber]}
      </div>
    );
  }
}

export default Google;