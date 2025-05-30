import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='w-full bg-gradient-to-b from-[#b174da] to-[#ffffff]'>
    
    <div className="flex items-center gap-8">
      <div className='navbar-logo text-xl font-bold text-purple-800'>
        <Link to='/'>Event Planner</Link>
      </div>

      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><Link to='/venues'>Venue</Link></li>
        <li><Link to='/vendors'>Vendor</Link></li>
        <li><Link to='/photos'>Photo</Link></li>
        <li><Link to='/e-invite'>E-Invite</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>

    
  </nav>
  );
};

export default Navbar;
