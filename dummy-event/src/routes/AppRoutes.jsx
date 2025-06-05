import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/public/Home'; 
// import Contact from '../pages/public/Contact';
import Venue from '../pages/public/Venue';
import Vendor from '../pages/public/Vendor';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path='/Venues' element={<Venue />}></Route>
        <Route path='/vendors' element={<Vendor />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
