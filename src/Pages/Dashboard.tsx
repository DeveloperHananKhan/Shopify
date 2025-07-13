import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useUser } from "../API/User";
import { useWalletStore } from "../Store/Wallet";
import { Link, Navigate } from "react-router-dom";
export const Dashboard = () => {
  const { logOut, user } = useUser();
  const { balance } = useWalletStore();
  if (!user) return <Navigate to="/signIn" />;

  return (
    <>
      <section className="flex flex-col min-h-screen">
        <Navbar />
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
                <Link to="/wallet">
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
              manage orders, check wallet balance, and update profile settings.
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
        <Footer />
      </section>
    </>
  );
};
