import {  Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { AllProducts } from './Pages/Products';
import { Login } from './Pages/login';
import { Cart } from './Pages/Cart';
import { SignUp } from './Pages/SignUp';

function App() {
  return (<>
    
 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/signIn" element={<Login/>} />
        <Route path='/signUp' element={<SignUp />} />
         <Route path="/cart" element={<Cart/>} />
      </Routes>

    
 </>
  );
}

export default App;
