import './App.css';
import Nav from './component/Nav';
import Footer from './component/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './component/Signup';
import PrivateComponent from './component/PrivateComponent';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
     <Nav/>
     <Routes>
      <Route element={<PrivateComponent/>}>
          <Route path="/" element={<h1>Product Listing</h1>}/>
          <Route path="/add" element={<h1>add your product</h1>}/>
          <Route path="/update" element={<h1>update your product</h1>}/>
          <Route path="/logout" element={<h1>logout component</h1>}/>
          <Route path="/profile" element={<h1>profile component</h1>}/>
          </Route>
          <Route path="/signup" element={<SignUp/>}/>
      </Routes>
     </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
