import React, {useState, useRef, useEffect} from 'react';
import '../App.css';
import Popup from 'reactjs-popup';
import googlelogo from '../images/googlelogo.png';


// TODO
// Fix the CSS to properly vertically align the search icon/textarea

function Google(props) {
  const [popupNumber, setPopupNumber] = useState(0);
  const [searchBarClicked, setSearchBarClicked] = useState(true);
  const [didSearch, setDidSearch] = useState(false);
  

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
          <h3>Welcome to Google!</h3>
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
      </Popup>
  ]

  function handleSubmit(e) {
    e.preventDefault();
    let s = e.target.search.value.toLowerCase().trim();
    console.log("handleSubmit called!");
    if (popupNumber === 3) {
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
    return (
      <div>
        <div class="google-content">
          <img id="google-logo" src={googlelogo}/>
          <br/>
          <form onSubmit={handleSubmit}>
            <div className={searchBarClicked ? "google-textarea google-outline-grey" : "google-textarea google-outline-red"}>
              <div class="google-search-icon">
              <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                </path>
              </svg>
              </div>
              <input type="text" name="search" onFocus={onSearchFocus} onBlur={onSearchUnfocus}/>
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
    return (
      <p>todo</p>
    );
  }
}

export default Google;