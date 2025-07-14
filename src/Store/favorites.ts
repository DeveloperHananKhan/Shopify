import { create } from "zustand";
import type { Product } from "../types/data";


interface WishList{

    favourites : Product[];
    toogleFavourite : (p : Product) => void
    isFavourite: (id: number) => boolean
    total:()=> number
}


export const useWishList = create<WishList>((set,get)=>({

favourites: JSON.parse(localStorage.getItem('wishlist') || '[]'),
toogleFavourite: (p: Product)=>{
const current = get().favourites
const isFav = current.some((item)=> item.id === p.id)
const updated = isFav ? current.filter((item)=> item.id !== p.id) : [...current,p]

set({favourites : updated})
localStorage.setItem('wishlist',JSON.stringify(updated))

},
isFavourite: (id: number) =>{
 return get().favourites.some(item => item.id === id);


},
total: () => get().favourites.length




})) 