import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useData } from "../API/Product";
import { useUserCart } from "../Store/Cart";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-toastify";
import type { Product } from "../types/data";
import { useUser } from "../API/User";

export const Home = () => {
  const { dat, loading } = useData();
    const { addCartItem } = useUserCart();
    const {user} = useUser()
  
  const handleAddToCart = (product: Product) => {
    addCartItem(product); 
      if (!user) {
    toast.error("Please login to add items to your cart",{
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
    return;
  }
     toast.success(`${product.title} added to cart!`, {
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

      <div>
        <HeroSection />
      </div>

      <hr className="my-8 border-t border-gray-300" />

      <section className="bg-white py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Products
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="border p-4 rounded-lg shadow animate-pulse"
                  >
                    <Skeleton height={160} />
                    <Skeleton width={100} className="mt-2" />
                    <Skeleton width={80} />
                  </div>
                ))
              : dat.slice(0, 8).map((product) => (
                
                  <div
                    key={product.id}
                    className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                  >
                    < Link to={`/viewPage/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-40 w-full object-contain mb-4"
                    />
                    </Link>
                    <h3 className="text-sm font-medium text-gray-700">
                      {product.title}
                    </h3>
                    <p className="text-gray-900 font-semibold">
                      ${product.price}
                    </p>
                        
                    <button onClick={()=>handleAddToCart(product) } className="flex justify-self-end bg-gray-100 text-gray-900 hover:bg-gray-200 px-4 py-2 rounded flex items-center gap-2">
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

          {!loading && (
            <div className="text-center mt-8">
              <Link to="/products">
                <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
                  View All Products
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};
