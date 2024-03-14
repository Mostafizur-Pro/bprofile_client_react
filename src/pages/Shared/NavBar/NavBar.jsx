import { Link } from "react-router-dom";
import hallRoomLogo from "../../../assets/logo/b-room1.png";
import logo from "../../../assets/logo/logo.png";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0}>
              <button className="btn-22 {{request()->routeIs('members/{id}') ? ' btn-23 ' : ' '}}">
                <span>Menubar</span>
              </button>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Country</Link>
              </li>
              <li>
                <Link>Product </Link>
              </li>
              <li>
                <Link>Our Client </Link>
              </li>
              <li>
                <Link>Our Employee </Link>
              </li>
              <li>
                <Link>Mobile APP</Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <Link>Service</Link>
      </li>
      <li>
        <Link>
          <div className="w-[90px] -mt-5 transition duration-300 ease-in-out hover:scale-110 object-cover">
            <img src={hallRoomLogo} alt="" />
          </div>
        </Link>
      </li>
      <li>
        <Link>Package</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Contacts</Link>
      </li>
      <li>
        <Link>App</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">bProfile</a> */}
        <a
          href="{{url('/')}}"
          className="w-16  md:w-60 flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
        >
          <img className="" alt="logo" src={logo} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
