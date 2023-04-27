import '../App.css';
import {Link} from 'react-router-dom';

function Start() {
  return (
    <div>
        <p>Home Page placeholder</p>
        <Link to='/google'>Google</Link>
        <br/>
        <Link to='/facebook'>Facebook</Link>
    </div>
  );
}

export default Start;
