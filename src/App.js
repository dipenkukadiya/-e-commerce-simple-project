import './App.css';
import Nav from './component/Nav';
import Footer from './component/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './component/Signup';
import Login from './component/Login';
import ProductList from './component/ProductList';
import AddProduct from  './component/AddProduct'
import UpdateProduct from './component/UpdateProduct';
import PrivateComponent from './component/PrivateComponent';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
     <Nav/>
     <Routes>
      <Route element={<PrivateComponent/>}>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/add" element={<AddProduct/>}/>
          <Route path="/update/:id" element={<UpdateProduct/>}/>
          <Route path="/logout" element={<h1>logout component</h1>}/>
          <Route path="/profile" element={<h1>profile component</h1>}/>
          </Route>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>

      </Routes>
     </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
