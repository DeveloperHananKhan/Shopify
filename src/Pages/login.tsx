import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";
import { useUser } from "../API/User";
import { useWalletStore } from "../Store/Wallet";

export const Login = () => {
  const {
    email,
    password,
    checked,
    loading,
    handleSubmit,
    setEmail,
    setPassword,
    setChecked,
    setLoading,
    logOut,
    user,
  } = useUser();
  const {balance}=useWalletStore()

  return (
    <>
      <div>
        <section className="flex flex-col min-h-screen">
          <Navbar />
          {user ? (
            <div className="flex flex-col lg:flex-row max-w-6xl mx-auto w-full p-4 lg:mt-10 gap-6">
              
              <aside className="bg-white rounded-lg shadow-md w-full lg:w-1/4 p-6">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={user?.avatar}
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <h2 className="text-xl font-bold">
                    {user?.firstName} {user?.lastName}
                  </h2>
                  <p className="text-gray-600 text-sm">{user?.email}</p>

                  <button
                    onClick={logOut}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded w-full"
                  >
                    Logout
                  </button>
                </div>

                <div className="mt-6">
                  <ul className="space-y-3">
                    <li className="font-semibold text-gray-700 cursor-pointer hover:text-black">
                      👤 Profile
                    </li>
                    <li className="font-semibold text-gray-700 cursor-pointer hover:text-black">
                      📦 Order History
                    </li>
                    <Link to='/wallet'>
                    
                    <li className="font-semibold text-gray-700 cursor-pointer hover:text-black">
                      💳 Wallet
                    </li>
                    </Link>
                    <li className="font-semibold text-gray-700 cursor-pointer hover:text-black">
                      ⚙️ Settings
                    </li>
                  </ul>
                </div>
              </aside>

             
              <main className="bg-white rounded-lg shadow-md w-full lg:w-3/4 p-6">
                <h3 className="text-2xl font-bold mb-4">Dashboard</h3>
                <p className="text-gray-600">
                  This is your dashboard where you can see your recent activity,
                  manage orders, check wallet balance, and update profile
                  settings.
                </p>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded shadow-inner">
                    <h4 className="font-semibold mb-2">📦 Recent Orders</h4>
                    <p className="text-sm text-gray-500">No recent orders.</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded shadow-inner">
                    <h4 className="font-semibold mb-2">💰 Wallet Balance</h4>
                    <p className="text-sm text-gray-500">${balance.toFixed(2)}</p>
                  </div>
                </div>
              </main>
            </div>
          ) : (
            <div className="container h-full px-6 py-24">
              <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="w-full"
                    alt="Phone image"
                  />
                </div>

                <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
                  <h2 className="text-center text-3xl font-bold text-black-800 dark:text-black mb-6">
                    Welcome Back! Sign In
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="relative mb-6" data-twe-input-wrapper-init>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] text-black outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300"
                        id="email"
                        placeholder="Email address"
                      />
                      <label
                        htmlFor="email"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out opacity-0 peer-focus:opacity-100 peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:opacity-100 peer-data-[twe-input-state-active]:-translate-y-[1.6rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                      >
                        Email address
                      </label>
                    </div>

                    <div className="relative mb-6" data-twe-input-wrapper-init>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] text-black outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300"
                        id="password"
                        placeholder="Password"
                      />
                      <label
                        htmlFor="password"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out opacity-0 peer-focus:opacity-100 peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:opacity-100 peer-data-[twe-input-state-active]:-translate-y-[1.6rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                      >
                        Password
                      </label>
                    </div>

                    <div className="mb-6 flex items-center justify-between">
                      <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                        <input
                          className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                          type="checkbox"
                          value=""
                          id="exampleCheck3"
                          checked={checked}
                          onChange={(e) => setChecked(e.target.checked)}
                        />
                        <label
                          className="inline-block ps-[0.15rem] hover:cursor-pointer"
                          htmlFor="exampleCheck3"
                        >
                          Remember me
                        </label>
                      </div>

                      <a
                        href="#!"
                        className="text-primary focus:outline-none dark:text-primary-400"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full rounded bg-black px-7 py-3 text-sm font-medium uppercase text-white flex items-center justify-center transition ${
                        loading
                          ? "opacity-60 cursor-not-allowed"
                          : "hover:bg-gray-900"
                      }`}
                    >
                      {loading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      ) : (
                        "Sign in"
                      )}
                    </button>

                    <p className="mt-4 text-center text-sm text-gray-600">
                      Don’t have an account?{" "}
                      <Link
                        to="/signup"
                        className="text-blue-600 hover:underline"
                      >
                        Sign up
                      </Link>
                    </p>

                    <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                      <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                        OR
                      </p>
                    </div>

                    <a
                      className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                      style={{ backgroundColor: "#3b5998" }}
                      href="#!"
                      role="button"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                    >
                      <span className="me-2 fill-white [&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                        </svg>
                      </span>
                      Continue with Facebook
                    </a>
                    <a
                      className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                      style={{ backgroundColor: "#55acee" }}
                      href="#!"
                      role="button"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                    >
                      <span className="me-2 fill-white [&>svg]:h-3.5 [&>svg]:w-3.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                      </span>
                      Continue with X
                    </a>
                  </form>
                </div>
              </div>
            </div>
          )}
          <Footer />
        </section>
      </div>
    </>
  );
};
