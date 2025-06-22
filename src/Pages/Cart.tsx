import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useUserCart } from "../Store/Cart";
import { useUser } from "../API/User";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { items, addQuantity, subQuantity, removeProduct } = useUserCart();
  const { user } = useUser();
  const totalCount = useUserCart((state) => state.totalCount());
  const totalAmount = useUserCart((state) => state.totalAmount());

  return (
    <>
      <Navbar />
      <section className="min-h-screen">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
            </header>

            {!user ? (
              <div className="text-center mt-12 text-gray-600 ">
                  <img
                  src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                  alt="Empty cart"
                  className="mx-auto w-30 h-30 opacity-50 mb-4 "
                />
                <p className="text-lg font-medium">Please log in to view your cart.</p>
              </div>
            ) : totalCount === 0 ? (
              <div className="text-center mt-12 text-gray-500">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                  alt="Empty cart"
                  className="mx-auto w-24 h-24 opacity-50 mb-4"
                />
                <p className="text-lg font-semibold">Your cart is empty</p>
                <p className="text-sm mt-1">Looks like you haven't added anything yet.</p>
              </div>
            ) : (
              <>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex flex-col sm:flex-row items-center gap-4 border-b pb-4"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 rounded-sm object-cover"
                      />

                      <div className="flex-1 w-full">
                        <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-xs text-gray-500">${item.price.toFixed(2)}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => subQuantity(item.id)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.amount}
                          readOnly
                          className="w-10 text-center text-sm bg-gray-100 border border-gray-200 rounded"
                        />
                        <button
                          onClick={() => addQuantity(item.id)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeProduct(item.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 border-t pt-6">
                  <div className="flex justify-between text-sm text-gray-700 mb-2">
                    <span>Items in cart:</span>
                    <span>{totalCount}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-gray-900">
                    <span>Total:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>

                  <div className="mt-6 text-right">
                    <Link to="/checkOut">
                    <button
                      className="bg-gray-800 hover:bg-gray-700 px-6 py-3 text-white rounded-sm text-sm transition"
                    >
                      Checkout
                    </button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
