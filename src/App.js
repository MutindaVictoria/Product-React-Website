import './App.css';
import Products from './Products';
import navbar from './NavBar';
import Form from './Form';
import ProductDetailsPage from './ShowProduct';
import Login from './Login';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Productsinfo from './ShowProduct';


function App() {
  return (
    <div >
     <navbar/>
     {/* <NavBar/> */}
     <Login/>
      <BrowserRouter>
      <Routes>
       <Route index element={<Products/>}/>
       <Route path='/home' element={<Products/>}/>
       <Route path='/information/:productId' element={<Productsinfo/>}/>
       <Route path='/form' element={<Form/>}/>
       <Route path='/login' element={<Login/>}/>

        </Routes>
        </BrowserRouter> 
    </div>
  ); 
}

export default App;
