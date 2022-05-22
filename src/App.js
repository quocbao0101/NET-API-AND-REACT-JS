import Guest from './Guest';
import Product from "./pages/Product/Product" ;
import Header from './pages/Header/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Guest />}>
        <Route index element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
