import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-300 shadow-lg'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className="text-slate-700">Oracle</span>
            <span className="text-slate-1200">Hub</span>
          </h1>
        </Link>
        <form className="bg-slate-100 flex flex-wrap rounded-lg p-3 items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus: outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-800" />
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-800 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/reports'>
            <li className='hidden sm:inline text-slate-800 hover:underline'>
              Reports
            </li>
          </Link>
          <Link to='/reusable-components'>
            <li className='hidden sm:inline text-slate-800 hover:underline'>
              Reusable Components
            </li>
          </Link>
          <Link to='/contact-us'>
            <li className='hidden sm:inline text-slate-800 hover:underline'>
              Contact Us
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-800 hover:underline'>
              About
            </li>
          </Link>
          <Link to='/sign-in'>
            <li className='text-slate-800 hover:underline'>
              Sign In
            </li>
          </Link>
        </ul>
      </div>
      
    </header>
  )
}
