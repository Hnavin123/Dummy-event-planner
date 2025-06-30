import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/public/Home'; 
// import Contact from '../pages/public/Contact';
import Venue from '../pages/public/Venue';
import Vendor from '../pages/public/Vendor';
import Photo from '../pages/public/Photo';
import About from '../pages/public/About';
import Contact from '../pages/public/Contact';
import UserList from '../pages/public/UserList';
import ProductList from '../pages/public/ProductList';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path='/Venues' element={<Venue />}></Route>
        <Route path='/vendors' element={<Vendor />}></Route>
        <Route path='/photos' element={<Photo/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='/userlist' element={<UserList/>}></Route>
        <Route path='/productlist' element={<ProductList/>}></Route>
        
      </Route>
    </Routes>
  );
};

export default AppRoutes;
