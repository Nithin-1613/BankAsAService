import 'bootstrap/dist/css/bootstrap.min.css';

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";


const Navbar = () => {

  const user = useSelector((state) => state.user);
 

  return (
      // Conditional rendering or provide a default value
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Natwest Banking
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {user && user[0] ? (
              <h1>Dashboard {user[0].firstname}</h1>
          ) : (
              <h1>Loading...</h1> // or provide an error message
          )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
      
  );
};


export default Navbar;