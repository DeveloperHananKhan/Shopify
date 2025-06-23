import { useEffect,useState } from "react";
import axios from "axios";
import type { Product } from "../types/data";
export const useData = () =>{

      const [dat, setDat] = useState<Product[]>([]);
      const [loading,setLoading]=useState(true)
      const API = "https://fakestoreapi.com/products/";
    
      const productData = async () => {
        try {
          const res = await axios.get<Product[]>(API);
          console.log(res);
          setDat(res.data);
          setLoading(false)
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        productData();
      }, []);

      return {dat,loading}

}