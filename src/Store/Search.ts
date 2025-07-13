import { create } from "zustand";
import axios from "axios";
import type { Product } from "../types/data";

interface SearchState {
  query: string;
  setQuery: (q: string) => void;
  products: Product[];
  loading: boolean;
   page: number;
  limit: number;
  setPage: (p: number) => void;
  fetchProducts: () => void;
}

export const useSearchStore = create<SearchState>((set, get) => ({
  query: "",
  products: [],
  loading: false,
  page: 1,
  limit: 8,

  setQuery: (q) => set({ query: q, page: 1 }), 
  setPage: (p) => set({ page: p }),

  fetchProducts: async () => {
    const { query, page, limit } = get();
    const skip = (page - 1) * limit;
    const url = query
      ? `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}&limit=${limit}&skip=${skip}`
      : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    set({ loading: true });
    try {
      const res = await axios.get(url);
      set({ products: res.data.products });
    } catch (e) {
      console.error(e);
      set({ products: [] });
    } finally {
      set({ loading: false });
    }
  },
}));