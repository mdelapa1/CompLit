import '../App.css';
import Popup from 'reactjs-popup';
import googlelogo from '../images/googlelogo.png';

// TODO
// Fix the CSS to properly vertically align the search icon/textarea

function Google() {
  const [popupNumber, setPopupNumber] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();


  }

  return (
    <div>
      <div class="google-content">
        <img id="google-logo" src={googlelogo}/>
        <br/>
        <form onSubmit={handleSubmit}>
          <div class="google-textarea">
            <div class="google-search-icon">
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
              </path>
            </svg>
            </div>
            <textarea/>
          </div>
                  <br/>
                  <input class="google-button" type="submit" value="Google Search"/>
                  <input class="google-button" type="button" value="I'm Feeling Lucky"/>
        </form>
        
      </div>

        {/* <Popup trigger={
          <button className="button"> Open Modal </button>
        } 
        closeOnDocumentClick={false}
        closeOnEscape={false}
          modal
          >
          <p>
            Welcome to google!
          </p>
        </Popup> */}
    </div>
  );
}

export default Google;