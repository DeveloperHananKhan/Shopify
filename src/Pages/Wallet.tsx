import { useWalletStore } from "../Store/Wallet";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useUser } from "../API/User";

export const Wallet = () => {
    const {balance}=useWalletStore()
    const {user} = useUser()
  return(<>
  
  <Navbar />
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden p-8 min-h-[500px]">
      
      <div className="flex flex-col items-center space-y-4">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-24 h-24 rounded-full object-cover shadow"
        />
        <h2 className="text-xl font-semibold text-gray-800">Hi, {user.firstName} 👋</h2>

       
        <div className="text-center">
          <p className="text-gray-500 text-sm">Wallet Balance</p>
          <p className="text-3xl font-bold text-green-600">${balance.toFixed(2)}</p>
        </div>
      </div>

    
      <div className="mt-10 flex flex-col sm:flex-row gap-6">
        
        <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-4 shadow">
          <button className="w-full flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-md mb-4 hover:opacity-90 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Cash
          </button>
          <p className="text-sm text-gray-600">Add money to your wallet securely using any payment method.</p>
        </div>

        
        <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-4 shadow">
          <button className="w-full flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-md mb-4 hover:opacity-90 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5" />
            </svg>
            Withdraw
          </button>
          <p className="text-sm text-gray-600">Transfer your wallet balance to your linked account or card.</p>
        </div>
      </div>
    </div>
    <Footer />
  </>)
  
};
