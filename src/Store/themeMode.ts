import { create } from "zustand";
type Theme = "light" | 'dark'
interface themeMode{
    theme: Theme
    toggleTheme: (t: Theme) => void
}
export const useThemeStore = create<themeMode>((set,get)=>({

theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
toggleTheme: (t: Theme)  =>{
     const currentTheme = get().theme

     if(t === 'dark'){
       document.documentElement.classList.add("dark")
     }
     else{
       document.documentElement.classList.remove("dark")
     }
       localStorage.setItem("theme", t);
     set({theme : t})

}
}))