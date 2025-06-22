import { useUserCart } from "../Store/Cart";
import { useWalletStore } from "../Store/Wallet";
import { toast } from "react-toastify";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useNavigate } from "react-router";
export const CheckOut = () => {
  const navigate = useNavigate();

  const { items, totalAmount, removeProduct } = useUserCart();
  const { balance, reduceAmount } = useWalletStore();

  const handleCheckout = () => {
    if (totalAmount() > balance) {
      toast.error("Insufficient wallet balance.", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      reduceAmount(totalAmount());
      toast.success("Payment successful!", {
        position: "top-center",
        autoClose: 3000,
      });

      items.forEach((item) => removeProduct(item.id));
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6 bg-white mt-10 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

        
        <div className="mb-4 p-4 border border-gray-200 rounded bg-gray-50">
          <p className="text-gray-600 text-sm">Wallet Balance</p>
          <p className="text-green-600 font-bold text-xl">
            ${balance.toFixed(2)}
          </p>
        </div>

       
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Order Summary</h3>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.title} × {item.amount}
                </span>
                <span>${(item.price * item.amount).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between font-semibold text-gray-800">
            <span>Total</span>
            <span>${totalAmount().toFixed(2)}</span>
          </div>
        </div>

        
        <button
          onClick={handleCheckout}
          disabled={items.length === 0}
          className={`w-full py-3 rounded text-white text-sm font-semibold transition ${
            items.length === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          Pay Now
        </button>
      </div>
      <Footer />
    </>
  );
};
