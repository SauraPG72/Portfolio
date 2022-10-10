import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';
import SignInPage from './pages/SignIn';
function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/signin" element={<SignInPage/>} exact/>

        </Routes>
       
        
    </Router>
  );
}

export default App;
