import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  const [showModel, setShowModel] = useState(false);
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive ? "text-black" : "text-gray-500 hover:text-black"
    }`;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    toast.success("Logout successfully!");
    setShowModel(false);
    window.location.reload(); // Refreshes app state to reflect logged-out status
  };

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

          <NavLink to="/categorycreate" className={navLinkClass}>
            Category
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          {token ? (
            <button
              type="button"
              onClick={() => setShowModel(true)}
              className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black sm:block"
            >
              <div className="flex gap-2">
                <div>
                  <p>{username}</p>
                </div>
                <div className="text-red-600">Logout</div>
              </div>
            </button>
          ) : (
            <div className="flex gap-2">
              <Link
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
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Logout Modal */}
      {showModel && (
        <div className="fixed inset-0 w-screen h-screen bg-black/45 z-10 flex justify-center items-center">
          <div className="bg-white px-8 py-5 rounded-2xl shadow-xl">
            <p className="font-semibold text-gray-900">Confirm to logout?</p>
            <div className="mt-4 gap-3 flex justify-end">
              <button
                onClick={() => setShowModel(false)}
                className="px-4 py-2 border border-gray-300 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                No
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;