import { Link, useNavigate } from "react-router-dom";
import { useSearchStore } from "../Store/Search";
import { useUser } from "../API/User";
import { useState } from "react";
import { useUserCart } from "../Store/Cart";
import { useWalletStore } from "../Store/Wallet";
import { useWishList } from "../Store/favorites";
import { useThemeStore } from "../Store/themeMode";
export const Navbar = () => {
  const navigate = useNavigate();
  const { query, setQuery, fetchProducts } = useSearchStore();
  const totalCount = useUserCart((state) => state.totalCount());
  const [isOpen, setOpen] = useState(false);
  const { user } = useUser();
  const { balance } = useWalletStore();
  const { theme, toggleTheme } = useThemeStore();
  const total = useWishList((state) => state.favourites.length);
  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };
  return (
    <>
      <nav className="relative flex w-full items-center justify-between bg-white text-gray-800 shadow-md py-2 dark:bg-gray-800 dark:text-white lg:flex-wrap lg:justify-start lg:py-4 ">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <button
            onClick={() => setOpen(!isOpen)}
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
          >
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            }  flex-grow basis-[100%] items-center lg:!flex lg:basis-auto`}
            id="navbarSupportedContent1"
            data-twe-collapse-item
          >
            <span className="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0">
              <img
                src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
                style={{ height: "15px" }}
                alt="TE Logo"
                loading="lazy"
              />
            </span>

            <ul
              className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
              data-twe-navbar-nav-ref
            >
              <Link to="/">
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <span
                    className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    data-twe-nav-link-ref
                  >
                    Home
                  </span>
                </li>
              </Link>
              <Link to="/aboutUs">
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <span
                    className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    data-twe-nav-link-ref
                  >
                    About Us
                  </span>
                </li>
              </Link>
              <Link to="/contactUs">
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <span
                    className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    data-twe-nav-link-ref
                  >
                    Contact
                  </span>
                </li>
              </Link>
            </ul>
          </div>

          <div className="relative flex flex-wrap items-center gap-2 sm:gap-2">
            <div className="flex flex-1 min-w-[180px] max-w-full sm:max-w-sm md:max-w-md lg:max-w-[300px] items-center justify-between mr-2">
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  const val = e.target.value;
                  setQuery(val);
                  if (val === "") {
                    fetchProducts();
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    fetchProducts();
                  }
                }}
                className="block w-full rounded border border-secondary-500 bg-transparent px-3 py-1.5 text-sm text-gray-800 placeholder:text-white focus:border-primary focus:outline-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-400"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <span
                className="ms-2 flex items-center text-gray-600 dark:text-white [&>svg]:w-5"
                id="button-addon2"
              >
                <svg
                  onClick={handleSearch}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <button
              onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
              className={`w-9 h-9 flex items-center justify-center rounded-full border shadow-sm transition-colors duration-300
    ${
      theme === "light"
        ? "bg-white text-yellow-500 border-gray-300 hover:bg-gray-100 hover:shadow-md"
        : "bg-gray-800 text-blue-300 border-gray-600 hover:bg-gray-700 hover:shadow-md"
    }
  `}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zm0 16.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM4.22 4.22a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L4.22 5.28a.75.75 0 010-1.06zM17.66 17.66a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM2.25 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm16.5 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H19.5a.75.75 0 01-.75-.75zM4.22 19.78a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06L5.28 19.78a.75.75 0 01-1.06 0zM17.66 6.34a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                </svg>
              )}
            </button>

            <Link to="/wishlist">
              <div className="ms-2 flex items-center text-gray-600 dark:text-white [&>svg]:w-5 mr-4 relative ">
                {user && total > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                    {total}
                  </span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-neutral-600 dark:text-white hover:text-blue-500"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
    2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
    C13.09 3.81 14.76 3 16.5 3
    19.58 3 22 5.42 22 8.5
    c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </div>
            </Link>

            <span className="me-4 text-neutral-600 dark:text-white">
              <Link to="/cart">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-neutral-600 dark:text-white hover:text-blue-500"
                  >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                  {user && totalCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                      {totalCount}
                    </span>
                  )}
                </div>
              </Link>
            </span>

            <div
              className="relative group cursor-pointer"
              data-twe-dropdown-ref
              data-twe-dropdown-alignment="end"
            >
              <span
                className="me-4 flex items-center text-neutral-600 dark:text-white"
                id="dropdownMenuButton1"
                role="button"
                data-twe-dropdown-toggle-ref
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white-600 hover:text-blue-500 transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.79V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-1.21a1 1 0 00-.76-.97l-5.48-1.37a1 1 0 00-.5 0l-5.48 1.37a1 1 0 00-.76.97z"
                  />
                </svg>
                <div className="absolute top-full mt-2 right-0 mr-2 whitespace-nowrap bg-white text-black text-sm px-4 py-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 border border-gray-200">
                  <p className="font-medium mb-2">Wallet Balance</p>
                  <p className="text-green-500 font-bold ">
                    {user ? `$${balance.toFixed(2)}` : "$00.00"}
                  </p>
                </div>
              </span>
            </div>

            <div
              className="relative"
              data-twe-dropdown-ref
              data-twe-dropdown-alignment="end"
            >
              <Link to="/signIn">
                <span
                  className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                  id="dropdownMenuButton2"
                  role="button"
                  data-twe-dropdown-toggle-ref
                  aria-expanded="false"
                >
                  {user ? (
                    <img
                      src={user.avatar}
                      className="rounded-full"
                      style={{ height: "25px", width: "25px" }}
                      alt=""
                      loading="lazy"
                    />
                  ) : (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      className="rounded-full"
                      style={{ height: "25px", width: "25px" }}
                      alt=""
                      loading="lazy"
                    />
                  )}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
