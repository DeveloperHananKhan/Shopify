import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Product } from "../types/data";
import { toast } from "react-toastify";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import axios from "axios";
import { useUserCart } from "../Store/Cart";
import { useUser } from "../API/User";
export const ViewPage = () => {
  const { productId } = useParams();
  const { items, addQuantity, subQuantity } = useUserCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const productInCart = items.find((item) => item.id === product?.id);
  const quantity = productInCart?.amount || 0;
  const { addCartItem } = useUserCart();

  const API = `https://dummyjson.com/products/${productId}`;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product>(API);
        if (response) {
          setProduct(response.data);
          setLoading(false);
        }
      } catch (error) {
        toast.error("there was an error while fetching the data", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);
  const handleAddToCart = (product: Product) => {
    addCartItem(product);
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
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {loading ? (
          <>
            <div className="w-full flex justify-center items-center">
              <div className="w-80 h-80 bg-gray-200 animate-pulse rounded-md" />
            </div>

            <div className="space-y-6">
              <div className="h-8 w-3/4 bg-gray-200 animate-pulse rounded" />
              <div className="h-4 w-1/4 bg-gray-200 animate-pulse rounded" />
              <div className="h-6 w-1/3 bg-gray-300 animate-pulse rounded" />
              <div className="h-20 w-full bg-gray-200 animate-pulse rounded" />
              <div className="h-10 w-40 bg-gray-300 animate-pulse rounded" />
            </div>
          </>
        ) : product ? (
          <>
            <div className="flex justify-center items-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-80 h-80 object-contain border rounded-md shadow-md"
              />
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                {product.title}
              </h1>
              <p className="text-sm text-gray-500 dark:text-white">{product.category}</p>
              <p className="text-xl text-green-600 font-semibold">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{product.description}</p>

              {user && <div className="flex items-center gap-2">
                  <button
                    onClick={() => subQuantity(product.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-10 text-center text-sm bg-gray-100 border border-gray-200 rounded"
                  />
                  <button
                    onClick={() => addQuantity(product.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                  >
                    +
                  </button>
                </div> }
                
              
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  Add to Cart
                </button>
              
            </div>
          </>
        ) : (
          <p className="text-red-600">Product not found</p>
        )}
      </div>

      <Footer />
    </>
  );
};
