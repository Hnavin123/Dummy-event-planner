import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='w-full bg-gradient-to-b from-[#b174da] to-[#ffffff]'>
      <div className="flex items-center gap-12 mb-2">
        <span>India's Favourite Event Planner Platform</span> 
        <input
      type="text"
      placeholder="Search..."
      className=" px-3 py-1 border border-gray-300 rounded-md"
    />

      </div>
      <div className='navbar-logo'>
        <Link to='/'>Event planner</Link>
      </div>

      <ul>
        <li><Link to='/venues'>Venue</Link></li>
        <li><Link to='/vendors'>Vendor</Link></li>
        <li><Link to='/photos'>Photo</Link></li>
        <li><Link to='/e-invite'>E-Invite</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
