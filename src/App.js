import Guest from './Guest';
import Product from "./pages/Product/" ;
import { Route, Routes } from 'react-router-dom';
import Admin from './adminPage/Admin';
import Home from './adminPage/Home';
import ManageProduct from './adminPage/ManageProduct';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Guest />}>
        <Route index element={<Product />} />
      </Route>

      
      <Route path='/admin' element={<Admin />}>
        <Route index element={<Home />} />
        <Route path='/admin/manage-prods' element={<ManageProduct />} />
      </Route>



    </Routes>
  );
}

export default App;
