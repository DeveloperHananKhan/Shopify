import { useSearchParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useSearchStore } from "../Store/Search";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useUserCart } from "../Store/Cart";
import { toast } from "react-toastify";
import { useUser } from "../API/User";
import type { Product } from "../types/data";
export const SearchPage = () => {
  const { addCartItem } = useUserCart();
  const { user } = useUser();
  const [params] = useSearchParams();
  const query = params.get("query") || "";

  const { products, loading, setQuery, fetchProducts } = useSearchStore();

  useEffect(() => {
    setQuery(query);
    fetchProducts();
  }, [query]);
  const handleAddToCart = (product: Product) => {
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
    addCartItem(product);
    toast.success(`${product.title} added to cart!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  if (loading)
    return (
      <div className="border p-4 rounded shadow animate-pulse">
        <Skeleton height={160} />
        <Skeleton width={100} className="mt-2" />
        <Skeleton width={80} />
      </div>
    );

  if (products.length === 0) {
    return (
      <div className="text-center text-gray-600 py-10">
        No products found for "<strong>{query}</strong>"
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow p-4 flex flex-col items-center"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-center">
              {product.title}
            </h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-green-600 font-bold mb-2">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};
