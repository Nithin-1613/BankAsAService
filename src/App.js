import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/register" Component={Register} />
            <Route path="/dashboard" Component={Dashboard} />
            
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
