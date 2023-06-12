
import logo from './logo.svg';
import './App.css';
//import Auth from './Components/Auth';
import Home from './Pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Registration from './Components/Registration';
import SignIn from './Components/SignIn';
import ProtectedRoutes from './Services/ProtectedRoutes';


function App() {
  return (
   <BrowserRouter>
    <Routes>
    <Route path="/Home" element={<ProtectedRoutes/>} >
      <Route path="/Home" element={<Home/>} />
    </Route>
     
    
      <Route path="/" element={<Registration/>} />
      
      <Route path="/SignIn" element={<SignIn/>} />
    </Routes>
   </BrowserRouter>
        
      
  );
}

export default App;
