import "./home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";

const Home = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const handleNavigate = () => {
    navigate("/register");
    console.log("new user");
  }
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  
  const [accountNO, setaccountNO] = useState("");
  
  const handleaccChange = (e) => {
    setaccountNO(e.target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(accountNO);
    try{
      const result=await axios.get('http://localhost:3000/users?AccountNumber='+accountNO);
      if(result.data.length===0){
        alert("Account Number not found");
      }
      else{
        dispatch(loginUser(result.data));
        navigate("/dashboard");
      }
    }
    catch{

    }
  }
  return (
    // Two buttons new user and services
    <div className="home-container">
      <div className="home-buttons">
        <button type="button"  onClick={handleNavigate}>New User</button>
        <button type="button"  onClick={handleShow}>Services</button>
      </div>
      <div
        className={`modal fade ${showModal ? 'show' : ''}`}
        style={{ display: showModal ? 'block' : 'none' }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label htmlFor="accountNO" class="login-label">Account Number: </label>
                <input
                  type="accountNO"
                  id="accountNO"
                  name="accountNO"
                  value={accountNO}
                  onChange={handleaccChange}
                  required
                  className="form-control login-input"
                  placeholder="Enter your account number"
                />
              </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-submit2"
                onClick={handleClose}>
                Close
              </button>
              <button type="submit" onClick={handleSubmit} className="btn-submit2">
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div
          className="modal-backdrop fade show"
          onClick={handleClose}
          style={{ display: showModal ? 'block' : 'none' }}
        ></div>
      )}
    </div>
  );
}

export default Home;
