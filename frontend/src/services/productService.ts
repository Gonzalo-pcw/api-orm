import type { Product } from "../types/Product";
const API_URL = "http://localhost:3000/api/products";
export const getAllProducts = async (): Promise<Product[]> => {
 const res = await fetch(API_URL);
 return await res.json();
};
export const getProductById = async (id: number): Promise<Product> => {
 const res = await fetch(`${API_URL}/${id}`);
 return await res.json();
};
export const createProduct = async (product: Product): Promise<Product> => {
 const res = await fetch(API_URL, {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify(product),
 });
 return await res.json();
};
export const updateProduct = async (id: number, product: Product): Promise<Product> => 
{
 const res = await fetch(`${API_URL}/${id}`, {
 method: "PUT",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify(product),
 });
 return await res.json();
};
export const deleteProduct = async (id: number): Promise<void> => {
 await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};