import { create } from "zustand";
import { toast } from "react-toastify";

export interface Wallet {
  balance: number;
  getBalance: () => number;
  addAmount: (amount: number) => void;
  reduceAmount: (amount: number) => void;
}
const initialBalance = Number(localStorage.getItem("wallet")) || 50000;
export const useWalletStore = create<Wallet>((set, get) => ({
  balance: initialBalance,
  getBalance: () => get().balance,

  addAmount: (amount: number) => {
    const updatedAmount = get().balance + amount;
    set({ balance: updatedAmount });
    localStorage.setItem("wallet", JSON.stringify(updatedAmount));
  },
  reduceAmount: (amount: number) => {
    const currentAmount = get().balance;
    if (amount <= currentAmount) {
      const updatedAmount = currentAmount - amount;
      set({ balance: updatedAmount });
      localStorage.setItem("wallet", JSON.stringify(updatedAmount));
    } else {
      toast.error("insufficent funds", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  },
}));
