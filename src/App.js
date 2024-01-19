import './App.css';
import {BrowserRouter as Router,
  Routes,
  Route,
  Navigate} from "react-router-dom"
import { Login } from './Login';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

function App() {
  return (
    <>
     <Router>
   <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route path="/page1" element={ <Page1 />} />
    <Route path="/page2" element={<Page2 />} />
  </Routes>   
</Router>
    
    </>
  );
}

export default App;
