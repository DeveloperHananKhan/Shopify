export interface ProductResponse {
  products: Product[];
}
export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: string;
  thumbnail: string;
 
}

export interface User {
  token: string;
}
export interface UserDetail {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}
