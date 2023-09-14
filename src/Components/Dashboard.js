import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './register.css'

const Dashboard = () => {
    let dispatch = useDispatch();
    const user = useSelector(state => state.user);
    useEffect(() => {
        console.log(user);
    }, [])

    return (
        // Conditional rendering or provide a default value
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        Natwest Banking
                    </a>
                    

                    <div className="d-flex" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                {user && user[0] ? (
                                    <a className="navbar-brand">Welcome &nbsp;&nbsp;&nbsp;{user[0].AccountNumber}</a>
                                ) : (
                                    <a className="navbar-brand">Loading...</a> // or provide an error message
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container-fluid service-bg">
                <div className="container service-content">
                    <div className="service-buttons">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <button to="/loan" className=" btn-lg btn-block service-button">
                                    Loan Service
                                </button>
                            </div>
                            <div className="col-md-6 mb-3">
                                <button to="/insurance" className="btn-lg btn-block service-button">
                                    Insurance Service
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <button to="/exchange" className=" btn-lg btn-block service-button">
                                    Exchange Service
                                </button>
                            </div>
                            <div className="col-md-6 mb-3">
                                <button to="/banking" className="btn-lg btn-block service-button">
                                    Banking Service
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <button to="/investment" className=" btn-lg btn-block service-button">
                                    Investment Service
                                </button>
                            </div>
                            <div className="col-md-6 mb-3">
                                <button to="/financial" className="btn-lg btn-block service-button">
                                    Financial Service
                                </button>
                            </div>
                        </div>
                        {/* Add more service buttons here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;