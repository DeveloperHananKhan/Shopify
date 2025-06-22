import { create } from "zustand";
import type { Product } from "../types/data";

interface CartItem extends Product {
  amount: number;
}

interface CartStore {
  items: CartItem[];
  addCartItem: (item: Product | Product[]) => void;
  addQuantity: (productId: number) => void;
  subQuantity: (productId: number) => void;
  removeProduct: (productId: number) => void;
  totalAmount: () => number;
  totalCount : () => number
}

export const useUserCart = create<CartStore>((set, get) => ({
  items: JSON.parse(localStorage.getItem("cart") || "[]"),
 addCartItem: (item: Product | Product[]) => {
  const currentItems = get().items
  const newItems = Array.isArray(item) ? item  : [item];
  const updatedItem =  [...currentItems]

  newItems.forEach((newItem)=>{
   const index  = updatedItem.findIndex((p)=> p.id === newItem.id) 

   if(index !== -1){
          updatedItem[index].amount += 1;
   }else{
    updatedItem.push({...newItem,amount: 1 })
   }
  })
  set({items : updatedItem})
  localStorage.setItem("cart",JSON.stringify(updatedItem))
 },

  addQuantity: (productId: number) => {
    const currentItems = get().items;

    const updatedItem = currentItems.map((p) =>
      p.id === productId
        ? {
            ...p,
            amount: p.amount + 1,
          }
        : p
    );

    set({ items: updatedItem });
    localStorage.setItem("cart", JSON.stringify(updatedItem));
  },

  subQuantity: (productId: number) => {
    const currentItems = get().items;

    const updatedItem = currentItems.map((p) =>
      p.id === productId && p.amount > 1 ? { ...p, amount: p.amount - 1 } : p
    );
    set({ items: updatedItem });
    localStorage.setItem("cart", JSON.stringify(updatedItem));
  },

  removeProduct: (productId: number) => {
    const currentItems = get().items;
    const deletedItems = currentItems.filter((p) => p.id !== productId);

    set({ items: deletedItems });
    localStorage.setItem("cart", JSON.stringify(deletedItems));
  },
  totalAmount: () => {
    const items = get().items;
    return items.reduce((total, item) => total + item.price * item.amount, 0);
  },
   totalCount: () => {
    return get().items.reduce((acc, item) => acc + item.amount, 0);
  }
}));
