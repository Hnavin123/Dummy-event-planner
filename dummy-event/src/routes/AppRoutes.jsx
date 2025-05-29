import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
// import Home from '../pages/public/Home'; // Replace with your actual components
// import Contact from '../pages/public/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        {/* <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} /> */}
        
      </Route>
    </Routes>
  );
};

export default AppRoutes;
