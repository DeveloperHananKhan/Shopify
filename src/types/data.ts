export interface Product {
  
    id: number;
  title: string;
  price: number;
  description?: any;
  category: string;
  image: string;

}

export interface User {
  token:string;
}
