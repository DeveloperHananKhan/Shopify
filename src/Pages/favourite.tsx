import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useWishList } from "../Store/favorites";
import { Link } from "react-router-dom";
import type { Product } from "../types/data";
import { useUser } from "../API/User";
import { useUserCart } from "../Store/Cart";
import { toast } from "react-toastify";
export const Favourite = () => {
  const { user } = useUser();
  const { addCartItem } = useUserCart();
  const { favourites} = useWishList();
  const handleAddToCart = (p: Product) => {
    if (!user) {
      toast.error("Please login to add items to your cart", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    addCartItem(p);
    toast.success(`${p.title} added to cart!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <>
      <Navbar />
      {favourites.length === 0 ? (
        <div className="text-center text-gray-500 text-lg py-10 h-[300px]">
          You have no favourites yet.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  p-10">
          {favourites.map((p: Product) => (
            <div
              key={p.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <Link to={`/viewPage/${p.id}`}>
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="h-40 w-full object-contain mb-4"
                />
              </Link>
              <h3 className="text-sm font-medium text-gray-700">{p.title}</h3>
              <p className="text-gray-900 font-semibold">${p.price}</p>
              <button
                onClick={() => handleAddToCart(p)}
                className="flex justify-self-end bg-gray-100 text-gray-900 hover:bg-gray-200 px-4 py-2 rounded flex items-center gap-2"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-900"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
};
