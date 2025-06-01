import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import type { Product } from "../types/Product";
interface Props {
 onSubmit: (product: Product) => void;
 selectedProduct: Product | null;
}
export default function ProductForm({ onSubmit, selectedProduct }: Props) {
 const [form, setForm] = useState<Product>({ name: "", price: 0, stock: 0 });
 useEffect(() => {
 if (selectedProduct) {
 setForm(selectedProduct);
 }
 }, [selectedProduct]);
 const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
 const { name, value } = e.target;
 setForm({ ...form, [name]: name === "name" ? value : parseFloat(value) });
 };
 const handleSubmit = (e: FormEvent) => {
 e.preventDefault();
 onSubmit(form);
 setForm({ name: "", price: 0, stock: 0 });
 };
 return (
 <form onSubmit={handleSubmit}>
 <input name="name" value={form.name} onChange={handleChange} 
placeholder="Nombre" />
 <input name="price" value={form.price} onChange={handleChange} 
placeholder="Precio" type="number" />
 <input name="stock" value={form.stock} onChange={handleChange} 
placeholder="Stock" type="number" />
 <button type="submit">{form.id ? "Actualizar" : "Crear"}</button>
 </form>
 );
}