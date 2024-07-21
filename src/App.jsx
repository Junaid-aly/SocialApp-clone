
import './App.css';

import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Home from './home';
import Register from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Profile from './components/Auth/ProfileUpdate';
// import Register from './components/Auth/Signup';

const App = () => {
  return (
  <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Signup" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
     </Routes>
     </BrowserRouter>
 
  </>
  );
};

export default App;
