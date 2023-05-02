import '../App.css';
import {Link} from 'react-router-dom';
import LandingImg from "../LandingPage.jpg"
import FacbookImg from "../FacebookImg.png"
import GoogleImg from "../GoogleImg.png"
import ScrollDown from "../scroll.png"

import "./start.css"

function Start() {
  return (
    <>
    <div class="container">
      <div class="text">
        <h1>Discover the Power of Facebook and Google</h1>
        <p>Harness the power of Facebook and Google to take your online presence to the next level. Whether you're looking to connect with friends and family, grow your business, or stay informed, these platforms have got you covered. Our guides and resources provide everything you need to get started and make the most of these powerful tools. Join the millions of people worldwide who are already using Facebook and Google to achieve their goals.</p>
      </div>
      <div class="image">
        <img src={LandingImg} alt="placeholder image" />
      </div>
      
      <div class="break">
      <p>Scroll below to get started!</p>
      <img src={ScrollDown} alt="scroll down" />
      </div>
      
    </div>


    <div class="card-container">
  <div class="card">
    <div class="card-img">
      <img src={FacbookImg} alt="Facebook Card"/>
    </div>
    <div class="card-content">
      <h2>Facebook</h2>
      <p>A social networking platform that allows the users to connect with their friends and family online.</p>
      <button class="explore-btn"><Link to='/facebook'>Click Here to Learn</Link></button>
    </div>
  </div>
  
  <div class="card">
    <div class="card-img">
      <img src={GoogleImg} alt="Google Card"/>
    </div>
    <div class="card-content">
      <h2>Google</h2>
      <p>A website that enables users to search for information on a wide number of subjects and provides the results to them.</p>
      <button class="explore-btn"><Link to='/google'>Click Here to Learn</Link></button>
    </div>
  </div>
</div>

{/* <div class="contact-container">
  <h2>Contact Us</h2>
  <div class="contact-details">
    <div class="contact-info">
      <i class="fas fa-map-marker-alt"></i>
      <h3>Address</h3>
      <p>123 Main Street, Suite 200<br/>Anytown, USA 12345</p>
    </div>
    <div class="contact-info">
      <i class="fas fa-phone-alt"></i>
      <h3>Phone</h3>
      <p>(123) 456-7890</p>
    </div>
    <div class="contact-info">
      <i class="fas fa-envelope"></i>
      <h3>Email</h3>
      <p>info@example.com</p>
    </div>
  </div>
</div> */}

<footer>
  <div class="footer-container">
    {/* <div class="brand-info">
      <h3>Brand Name</h3>
      <p>123 Main Street<br/>Anytown, USA 12345</p>
    </div>
    <div class="brand-info">
      <h3>Contact Us</h3>
      <p>Email: info@example.com</p>
    </div> */}
  </div>
  <div class="copy-right">
    <p>&copy; 2023 CompLit. All Rights Reserved.</p>
  </div>
</footer>



    </>
  );
}

{/* <Link to='/google'>Google</Link>
        <br/>
        <Link to='/facebook'>Facebook</Link> */}
export default Start;
