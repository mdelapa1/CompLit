import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import Popup from 'reactjs-popup';
import fbintro from '../FacebookImages/fb0.0.png'
import fb0 from '../FacebookImages/fb0.png'
import fb1 from '../FacebookImages/fb1.jpeg'
import fb2 from '../FacebookImages/fb2.jpeg'
import fb8 from '../FacebookImages/fb8.jpeg'
import fb9 from '../FacebookImages/fb9.jpeg'
import fb10 from '../FacebookImages/fb10.jpeg'
import fb11 from '../FacebookImages/fb11.jpeg'
import fb14 from '../FacebookImages/fb14.jpeg'
import fb15 from '../FacebookImages/fb15.jpeg'
import fb16 from '../FacebookImages/fb16.jpeg'
import fb17 from '../FacebookImages/fb17.jpeg'
import fb18 from '../FacebookImages/fb18.jpeg'
import fb19 from '../FacebookImages/fb19.jpeg'
import fb20 from '../FacebookImages/fb20.jpeg'
import fb21 from '../FacebookImages/fb21.jpeg'
import fb23 from '../FacebookImages/fb23.jpeg'
import fb24 from '../FacebookImages/fb24.jpeg'
import fb25 from '../FacebookImages/fb25.jpeg'
import fblogo from '../FacebookImages/fblogo.png'

// TODO
// Fix the CSS to properly vertically align the search icon/textarea

function Facebook(props) {
  const [popupNumber, setPopupNumber] = useState(0);
  const [imageNumber, setImageNumber] = useState(0);
  
  const images = [
    fblogo,
    fbintro,
    fb0,
    fb1,
    fb2,
    fb8,
    fb9,
    fb10,
    fb11,
    fb14,
    fb15,
    fb16,
    fb17,
    fb18,
    fb19,
    fb20,
    fb21,
    fb23,
    fb24,
    fb25
  ]

  const popups = [
    // 0
    <Popup
        open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
          contentStyle={{
            position: "fixed",
            bottom: "6vh",
            left: "6vh"
          }}
          >
          <h3>Welcome to Facebook!</h3>
          <p>Facebook is the one of the largest social networking platforms in the world!</p>
          <p>Facebook allows users to create profiles, connect with friends and family, share photos and videos, join groups, and follow pages of their interests. It has become a crucial platform for personal and business communication and networking.</p>
          <button class="initial-button" onClick={() => {setPopupNumber(1); setImageNumber(1)}}>Click here to proceed</button>
      </Popup>,
      // 1
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
        <p>
          This is what shows up when you enter the first page.
        </p>
        <button class="initial-button" onClick={() => {setPopupNumber(2); setImageNumber(2)}}>Click here to proceed</button>
      </Popup>,
      // 2
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
        <h3>Create New Account</h3>
        <p>when you are a new user and you dont have any accouunt on facebook then you have to click create new account button which is at mark with red square.</p>
        <button class="previous-button" onClick={() => {setPopupNumber(1); setImageNumber(1)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(3); setImageNumber(3)}}>Click here to proceed</button>
      </Popup>,
      // 3
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        top: "6vh",
        right: "2vh"
      }}
      overlayStyle={{
        "pointer-events": "none",
        background: "rgb(255, 255, 255, 0)"
      }}
        >
          <h3>Fill all the basic information about yourself</h3>
        <p>fill all the information that is marked inside the red area.This information help your friends to find you in facebook. And many more things</p>
        <button class="previous-button" onClick={() => {setPopupNumber(2); setImageNumber(2)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(4);setImageNumber(4)}}>Click here to proceed</button>
      </Popup>,
      // 4
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        top: "6vh",
        right: "2vh"
      }}
      overlayStyle={{
        "pointer-events": "none",
        background: "rgb(255, 255, 255, 0)"
      }}
        >
           <h3>Set a strong Password</h3>
        <p>Your password should be strong. so, no one can easily hack or misuse your account</p>
        <p>After filling all the detailes then click on the green button which is marked which red arrow to create your new account</p>
        <button class="previous-button" onClick={() => {setPopupNumber(3); setImageNumber(3)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(5); setImageNumber(5)}}>Click here to proceed</button>
      </Popup>,
      // 5
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        bottom: "2vh",
        left: "6vh"
      }}
      overlayStyle={{
        "pointer-events": "none",
        background: "rgb(255, 255, 255, 0)"
      }}
        >
          <h3>Fill the OTP</h3>
        <p>1 Step : You have to fill the otp which is send to your given mobile number or email id</p>
        <p>2 Step : If you didnot recived the OTP then you have to click on Resend confirmation code</p>
        <p>3 Step : After that you click on the next button to proceed further</p>
        <button class="previous-button" onClick={() => {setPopupNumber(4); setImageNumber(4)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(6); setImageNumber(6)}}>Click here to proceed</button>
      </Popup>,
      // 6
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        bottom: "10vh",
        right: "6vh"
      }}
      overlayStyle={{
        "pointer-events": "none",
        background: "rgb(255, 255, 255, 0)"
      }}
        >
        <p>Click on the Go to facebook button which is marked with the red ouline</p>
        <button class="previous-button" onClick={() => {setPopupNumber(5); setImageNumber(5)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(7); setImageNumber(7)}}>Click here to proceed</button>
      </Popup>,
      // 7
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        bottom: "6vh",
        right: "6vh"
      }}
      overlayStyle={{
        "pointer-events": "none",
        background: "rgb(255, 255, 255, 0)"
      }}
        >
          <h3>Yaahhh! you successfully created the account</h3>
        <p>In the top left corner there is the name show which is earlier filled by you choice.</p>
        <p>Click on it to set the basic information like your hobbies, and many more.</p>
        <button class="previous-button" onClick={() => {setPopupNumber(6); setImageNumber(6)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(8); setImageNumber(8)}}>Click here to proceed</button>
      </Popup>,
      // 8
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        bottom: "6vh",
        right: "6vh"
      }}
      overlayStyle={{
        "pointer-events": "none",
        background: "rgb(255, 255, 255, 0)"
      }}
        >
          <h3>Build your profile</h3>
        <p>Here you have to see the top there is avtar which is contain inside the red outline where you have to set the profile picture.</p>
        <p>After that there is the option called Intro where you have to edit all the detail like you have to add the "Bio" and edit details</p>
        <button class="previous-button" onClick={() => {setPopupNumber(7); setImageNumber(7)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(9); setImageNumber(9)}}>Click here to proceed</button>
      </Popup>,
      // 9
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
          <p>Here you show there is the arrow which points that you have to add workplace (where you work), add secondary schooling and many more things</p>
        <p>Here you add whatever you want to add in your account related to this.</p>
        <p>After filled all the details ther is a option called save which is at the bottom and highlighted with red border.</p>
        <button class="previous-button" onClick={() => {setPopupNumber(8); setImageNumber(8)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(10); setImageNumber(10)}}>Click here to proceed</button>
      </Popup>,
      // 10
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
          <h3>Find friends</h3>
        <p>To search friends on facebook, there is search option which is marked at the top left corner of the page. Here you can easily search on it</p>
        <p>You can also see who can send you the friend request and who is your friend, when was your friends birthday.</p>
        <button class="previous-button" onClick={() => {setPopupNumber(9); setImageNumber(9)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(11); setImageNumber(11)}}>Click here to proceed</button>
      </Popup>,
      // 11
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        bottom: "6vh",
        right: "6vh"
      }}
      overlayStyle={{
        "pointer-events": "none",
        background: "rgb(255, 255, 255, 0)"
      }}
        >
        <p>After clicking on the search option you have to write your friends name or any interesting groups or pages you want.</p>
        <button class="previous-button" onClick={() => {setPopupNumber(10); setImageNumber(10)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(12); setImageNumber(12)}}>Click here to proceed</button>
      </Popup>,
      // 12
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
        <p>After searching you see there is a lots of person and groups present already you have to find your friends and want to join groups</p>
        <p>inside the red outline there is an arrow which is where you have to just click to send the request to your friend or join the groups</p>
        <button class="previous-button" onClick={() => {setPopupNumber(11); setImageNumber(11)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(13); setImageNumber(13)}}>Click here to proceed</button>
      </Popup>,
      // 13
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
          <h3>Feed Section</h3>
        <p>This is very intresting section where you can watch videos memes and all.</p>
        <p>You can easily scroll and see feeds infinitly</p>
        <button class="previous-button" onClick={() => {setPopupNumber(12); setImageNumber(12)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(14); setImageNumber(14)}}>Click here to proceed</button>
      </Popup>,
      // 14
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
          <h3>Post your thought, emotions and pictures</h3>
        <p>You can easily post your thought, emotion, videos and pictures. </p>
        <button class="previous-button" onClick={() => {setPopupNumber(13); setImageNumber(13)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(15); setImageNumber(15)}}>Click here to proceed</button>
      </Popup>,
      // 15
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
        <p>when you want to post your picture then its youor choice weather you want to post it publically or with you friends and whome.</p>
        <p>After selecting the visibility then you have to click on the done button which is point out by an arrow</p>
        <button class="previous-button" onClick={() => {setPopupNumber(14); setImageNumber(14)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(16); setImageNumber(16)}}>Click here to proceed</button>
      </Popup>,
      // 16
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        right: "6vh",
        top: "6vh"
      }}
      overlayStyle={{
        "pointer-events": "none",
        background: "rgb(255, 255, 255, 0)"
      }}
        >
        <p>Here you have to choose your images and videos whatever you want to post. </p>
        <p>Also you have to add the caption related to your post</p>
        <button class="previous-button" onClick={() => {setPopupNumber(15); setImageNumber(15)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(17); setImageNumber(17)}}>Click here to proceed</button>
      </Popup>,
      // 17
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
        <p>After adding all the things there is on Post button which is marked with the red outlined. click on it to post your pictures</p>
        <button class="previous-button" onClick={() => {setPopupNumber(16); setImageNumber(16)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(18); setImageNumber(18)}}>Click here to proceed</button>
      </Popup>,
      // 18
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
        <p>In the top right corner there is an avtar which is also your profile photo just click on it to do logout from facebook</p>
        <p>After clicking on avtar there is a logout option to go logout from from facebook. just click on it</p>
        <button class="previous-button" onClick={() => {setPopupNumber(17); setImageNumber(17)}}>Click here to go back</button>
        <button class="next-button" onClick={() => {setPopupNumber(19); setImageNumber(19)}}>Click here to proceed</button>
      </Popup>,
      // 19
      <Popup
      open={true} closeOnDocumentClick={false} closeOnEscape={false} modal
      contentStyle={{
        position: "fixed",
        bottom: "6vh",
        left: "6vh",
        width: "50%",
      }}
        >
        <p>That's the essentials things of how to use Facebook!</p>
        <button class="previous-button" onClick={() => {setPopupNumber(18); setImageNumber(18)}}>Click here to go back</button>
        <Link to="/"><button class="next-button">Click here to go back to the home page</button></Link>
      </Popup>,
  ]

    return (
      <div>
        <img class="google-result" src={images[imageNumber]} />
        {popups[popupNumber]}
      </div>
    );
}

export default Facebook;