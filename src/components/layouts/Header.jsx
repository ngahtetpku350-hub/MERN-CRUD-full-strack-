import { Link, NavLink } from "react-router-dom";

function Header() { 
  const usernmae = localStorage.getItem('username');
  console.log(usernmae)
  const token = localStorage.getItem('token')
  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive ? "text-black" : "text-gray-500 hover:text-black"
    }`;

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="text-xl font-bold tracking-tight text-gray-950">
          MERN Blog
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/posts" className={navLinkClass}>
            Posts
          </NavLink>

          <NavLink to="/categorycreate" className={navLinkClass}> Category </NavLink>
          
        
        </nav>

        
        <div className="flex items-center gap-3">
          {token? <Link
            to="/login"
            
            className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black sm:block"
          >
            <div className="flex gap-2">
              <div>
                  <p>{usernmae}</p>
              </div>
              <div className="text-red-600">
                Logout
              </div>
              
            </div>
            
          </Link> : 
          <div className="flex gap-2"><Link
            to="/login"
            className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black sm:block"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
            Register
          </Link></div>
          
          }
         
        </div>
        

        
      </div>
    </header>
  );
}

export default Header;
