import { useContext, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaSearch,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, handelLogout } = useContext(AuthContext);
  console.log(user)
  const [cardItems, setCardItems] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handelSignOut = async (e) => {
    e.preventDefault();
    try {
      await handelLogout();
      toast.success("Logout successful!");
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      toast.error(`Logout failed: ${error.message}`);
    }
  };

  return (
    <>
      {/* ======= Fixed Navbar ======= */}
      <div className="fixed top-0 left-0 w-full z-50">
        {/* ============= DESKTOP NAVBAR ============= */}
        <div className="hidden xl:flex flex-col md:flex-row h-full bg-white shadow-md">
          {/* Left Logo */}
          <div className="relative w-[400px] bg-white hidden md:block">
            <div className="flex items-center justify-center h-full py-6 ml-[150px]">
              <img src="/images/logo.png" alt="Logo" className="h-14" />
            </div>
          </div>

          {/* Right Side */}
          <div
            className="flex flex-col flex-grow bg-black text-white relative"
            style={{
              clipPath: "polygon(2% 0, 100% 0%, 100% 100%, 0% 100%)",
              zIndex: 5,
            }}
          >
            {/* Top Red Bar */}
            <div className="bg-red-600 text-white text-sm ml-4 px-10 py-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MdOutlineAccessTime className="text-lg" />
                <span>09:00 am - 06:00 pm</span>
              </div>
              <div className="flex items-center gap-3 mr-[150px]">
                <span>Follow Us:</span>
                <div className="flex items-center gap-5">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaYoutube />
                  <FaLinkedinIn />
                </div>
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="px-10 py-4 flex justify-between items-center flex-wrap">
              {/* Menu Links */}
              <div className="flex gap-6 items-center font-semibold text-sm flex-wrap">
                <NavLink to="/" className="hover:text-red-500">Home</NavLink>
                <NavLink to="/menu" className="hover:text-red-500">Menu</NavLink>
                <NavLink to="/wishlist" className="hover:text-red-500">Wishlist</NavLink>
                <NavLink to="/aboutus" className="hover:text-red-500">About Us</NavLink>
                <NavLink to="/faq" className="hover:text-red-500">FAQ</NavLink>
                <NavLink to="/contactus" className="hover:text-red-500">Contact</NavLink>
                {user && (
                  <NavLink to="/dashboard" className="hover:text-red-500">Dashboard</NavLink>
                )}
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-7 mt-4 md:mt-0 text-white mr-[150px]">
                {/* Cart */}
                <button onClick={() => navigate("/card")} className="relative">
                  <FaShoppingCart className="text-xl cursor-pointer" />
                  <span className="absolute -top-2 -right-2 text-xs bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    {cardItems.length}
                  </span>
                </button>

                {/* Auth Buttons */}
                {user ? (
                  <>
                    <div className="relative group inline-block">
                      <img
                        src={user?.image || user?.photoURL || "/default-avatar.png"}
                        className="w-[30px] h-[30px] rounded-full object-cover"
                        alt={user?.name || user?.displayName || "User"}
                      />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-sm px-2 py-1 rounded shadow-md z-10 whitespace-nowrap">
                        {user?.name || user?.displayName || "User"}
                      </div>
                    </div>
                    <li onClick={handelSignOut} className="list-none">
                      <button className="bg-red-600 text-white px-4 py-2 text-sm flex items-center gap-1 hover:bg-red-700 transition">
                        LogOut <FaArrowRight />
                      </button>
                    </li>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="bg-red-600 text-white px-4 py-2 text-sm flex items-center gap-1 hover:bg-red-700 transition"
                  >
                    Login <FaArrowRight />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ============= MOBILE NAVBAR ============= */}
        <div className="xl:hidden flex items-center justify-between px-4 py-3 bg-white shadow-md">
          <img src="/images/logo.png" alt="Logo" className="h-10" />

          <div className="flex items-center gap-5">
            <FaSearch className="text-gray-600 text-lg cursor-pointer" />

            <button onClick={() => navigate("/card")} className="relative">
              <FaShoppingCart className="text-lg cursor-pointer" />
              <span className="absolute -top-2 -right-2 text-xs bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                {cardItems.length}
              </span>
            </button>

            <button
              className="text-2xl text-gray-700"
              onClick={() => setMobileMenu(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* ======= Mobile Drawer ======= */}
      <div
        className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ${
          mobileMenu ? "bg-black bg-opacity-50 visible" : "invisible"
        }`}
      >
        <div
          className={`w-72 bg-white h-full p-6 relative transform transition-transform duration-300 ${
            mobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setMobileMenu(false)}
            className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>

          <div className="flex items-center gap-2 mb-6">
            <img src="/images/logo.png" alt="Logo" className="h-12" />
          </div>

          <nav className="flex flex-col gap-4 font-medium text-gray-800">
            <NavLink to="/" className="hover:text-red-500">Home</NavLink>
            <NavLink to="/wishlist" className="hover:text-red-500">Wishlist</NavLink>
            <NavLink to="/menu" className="hover:text-red-500">Menu</NavLink>
            <NavLink to="/aboutus" className="hover:text-red-500">About Us</NavLink>
            <NavLink to="/contactus" className="hover:text-red-500">Contact</NavLink>
            {user && <NavLink to="/dashboard" className="hover:text-red-500">Dashboard</NavLink>}

            {user ? (
              <li onClick={handelSignOut} className="list-none">
                <button className="bg-red-600 text-white px-4 py-2 text-sm flex items-center gap-1 hover:bg-red-700 transition">
                  LogOut <FaArrowRight />
                </button>
              </li>
            ) : (
              <Link
                to="/login"
                className="bg-red-600 w-[100px] text-white px-4 py-2 text-sm flex items-center gap-1 hover:bg-red-700 transition"
              >
                Login <FaArrowRight />
              </Link>
            )}
          </nav>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[65px] lg:h-[66px] xl:h-[128px]"></div>
    </>
  );
};

export default Navbar;
