import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions';
import './register.css';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    let navigate=useNavigate();
    let dispatch=useDispatch();

    
    const [user, setUsers] = useState({
        firstname: "",
        lastname: "",
        password: "",
        mobilenumber: "",
        emailid: "",
        Aadharcardnumber: "",
        dateofbirth: "",
        AccountNumber: "",
        Accountbalance: 0,
    });

    const { firstname, lastname, password, mobilenumber, emailid, Aadharcardnumber, dateofbirth, AccountNumber, Accountbalance } = user;


    //validation
    
  
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isAadharValid, setIsAadharValid] = useState(true);
    const [isMobileValid, setIsMobileValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const validateEmail = (email) => {
        const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const isValidEmail = pattern.test(email);
        setIsEmailValid(isValidEmail);
    };
    const validateAadhar = (aadhar) => {
        const aadharRegex = /^[2-9]{1}[0-9]{11}$/; // Example: 123456789012
        setIsAadharValid(aadharRegex.test(aadhar));
    };

    const validateMobile = (mobile) => {
        const mobileRegex = /^[6-9]\d{9}$/; // Indian mobile numbers
        setIsMobileValid(mobileRegex.test(mobile));
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        setIsPasswordValid(passwordRegex.test(password));
    };


    const onInputChange = (e) => {
        setUsers({ ...user, [e.target.name]: e.target.value });
        if (e.target.name === 'emailid') {
            validateEmail(e.target.value);
        } else if (e.target.name === 'Aadharcardnumber') {
            validateAadhar(e.target.value);
        } else if (e.target.name === 'mobilenumber') {
            validateMobile(e.target.value);
        } else if (e.target.name === 'password') {
            validatePassword(e.target.value);
        }

    };



    const onSubmit = async (e) => {
        e.preventDefault();
        if(isAadharValid && isEmailValid && isMobileValid && isPasswordValid){
        try {
            const response = await axios.post('http://localhost:3000/users', user); 
            console.log(user);
            dispatch(registerUser(response.data));
            navigate("/")
            alert("Registration Successful");
          } catch (error) {
            
            console.error('Registration failed:', error);
          }
        }
        else{
            alert("Enter valid details!");
        }
        
    }

    return (
        // register form
        <div className="container-reg">
            <div className='row formrow flex-grow'>
                <div id="formcontent" className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className="text-center"> RegisterUsers</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='firstname' className='form-label login-label'>Firstname</label>
                            <input type={"text"}
                                className='form-control'
                                placeholder='enter your First name'
                                name="firstname"
                                value={firstname}
                                onChange={(e) => onInputChange(e)} required/>

                        </div>

                        <div className='mb-3'>
                            <label htmlFor='Lastname' className='form-label login-label'>Lastname</label>
                            <input type={"text"}
                                className='form-control'
                                placeholder='enter your name'
                                name="lastname"
                                value={lastname}
                                onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='password' className='form-label login-label'>Password</label>
                            <input type={"password"}
                                className='form-control'
                                placeholder='enter your password'
                                name="password"
                                value={password}
                                onChange={(e) => onInputChange(e)} required/>
                            {!isPasswordValid && <span className='text-danger'>Invalid Password</span>}
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='mobilenumber' className='form-label login-label'>MobileNumber</label>
                            <input type={"text"}
                                className='form-control'
                                placeholder='enter your MobileNumber'
                                name="mobilenumber"
                                value={mobilenumber}
                                onChange={(e) => onInputChange(e)} required/>
                            {!isMobileValid && <span className='text-danger'>Invalid Mobile Number</span>}
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='emailid' className='form-label login-label'>Emailid</label>
                            <input type={"email"}
                                className='form-control'
                                placeholder='enter your Emailid'
                                name="emailid"
                                value={emailid}
                                onChange={(e) => onInputChange(e)} required/>

                        </div>

                        <div className='mb-3'>
                            <label htmlFor='Aadharcardnumber' className='form-label login-label'>Aadharcardnumber</label>
                            <input type={"text"}
                                className='form-control'
                                placeholder='enter your Aadharcardnumber'
                                name="Aadharcardnumber"
                                value={Aadharcardnumber}
                                onChange={(e) => onInputChange(e)} required/>
                            {!isAadharValid && <span className='text-danger'>Invalid Aadharcardnumber</span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='dateofbirth' className='form-label login-label'>Dateofbirth</label>
                            <input type={"date"}
                                className='form-control'
                                placeholder='enter your Dateofbirth'
                                name="dateofbirth"
                                value={dateofbirth}
                                onChange={(e) => onInputChange(e)} required/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='AccountNumber' className='form-label login-label'>AccountNumber</label>
                            <input type={"text"}
                                className='form-control'
                                placeholder='enter your AccountNumber'
                                name="AccountNumber"
                                value={AccountNumber}
                                onChange={(e) => onInputChange(e)} required/>
                        </div>

                        <button type="submit" className='btn-submit'>Submit</button>
                        <button type="cancel" onClick={()=>navigate("/")} className='btn-submit mx-2'>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;
