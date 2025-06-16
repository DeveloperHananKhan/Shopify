import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <nav className="relative flex w-full items-center justify-between bg-white text-gray-800 shadow-md py-2 dark:bg-gray-900 dark:text-white lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <button
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
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

              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <span
                  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  data-twe-nav-link-ref
                >
                  About Us
                </span>
              </li>

              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <span
                  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  data-twe-nav-link-ref
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>

          <div className="relative flex flex-wrap items-center gap-2 sm:gap-2">
            <div className="flex flex-1 min-w-[180px] max-w-full sm:max-w-sm md:max-w-md lg:max-w-[300px] items-center justify-between mr-2">
              <input
                type="search"
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

            <span className="me-4 text-neutral-600 dark:text-white">
              <Link to="/cart">
                <span className="[&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                </span>
              </Link>
            </span>

            <div
              className="relative"
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
                <span className="[&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="absolute -mt-4 ms-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">
                  1
                </span>
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
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    className="rounded-full"
                    style={{ height: "25px", width: "25px" }}
                    alt=""
                    loading="lazy"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
