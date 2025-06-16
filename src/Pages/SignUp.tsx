import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <>
      <div>
        <section className="flex flex-col min-h-screen">
          <Navbar />
          <div className="container h-full px-6 py-24">
            <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="w-full"
                  alt="Signup visual"
                />
              </div>

              <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
                <h2 className="text-center text-3xl font-bold text-black-800 dark:text-black mb-6">
                  Create Account
                </h2>

                <form>
                  <div className="relative mb-6" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] text-black outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300"
                      id="fullName"
                      placeholder="Full Name"
                    />
                    <label
                      htmlFor="fullName"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out opacity-0 peer-focus:opacity-100 peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:opacity-100 peer-data-[twe-input-state-active]:-translate-y-[1.6rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"

                    >
                      Full Name
                    </label>
                  </div>

                  <div className="relative mb-6" data-twe-input-wrapper-init>
                    <input
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

                  <div className="relative mb-6" data-twe-input-wrapper-init>
                    <input
                      type="password"
                      className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] text-black outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                    />
                    <label
                      htmlFor="confirmPassword"
                     className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out opacity-0 peer-focus:opacity-100 peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:opacity-100 peer-data-[twe-input-state-active]:-translate-y-[1.6rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"

                    >
                      Confirm Password
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-black px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-gray-900 focus:outline-none focus:ring-0"
                  >
                    Sign up
                  </button>

                  <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                      to="/signIn"
                      className="text-blue-600 hover:underline"
                    >
                      Sign in
                    </Link>
                  </p>

                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                    <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                      OR
                    </p>
                  </div>

                  <a
                    className="mb-3 flex w-full items-center justify-center rounded px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out"
                    style={{ backgroundColor: "#3b5998" }}
                    href="#!"
                    role="button"
                  >
                    Continue with Facebook
                  </a>
                  <a
                    className="mb-3 flex w-full items-center justify-center rounded px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out"
                    style={{ backgroundColor: "#55acee" }}
                    href="#!"
                    role="button"
                  >
                    Continue with X
                  </a>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
};
