import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import type { Product } from "./types/Product";
import {
 getAllProducts,
 createProduct,
 updateProduct,
 deleteProduct,
} from "./services/productService";
function App() {
 const [products, setProducts] = useState<Product[]>([]);
 const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
 const loadProducts = async () => {
 const data = await getAllProducts();
 setProducts(data);
 };
 const handleCreateOrUpdate = async (product: Product) => {
 if (product.id) {
 await updateProduct(product.id, product);
 } else {
 await createProduct(product);
 }
 setSelectedProduct(null);
 await loadProducts();
 };
 const handleDelete = async (id: number) => {
 await deleteProduct(id);
 await loadProducts();
 };
 const handleEdit = (product: Product) => {
 setSelectedProduct(product);
 };
 useEffect(() => {
 loadProducts();
 }, []);
 return (
 <div>
 <h1>Gestión de Productos</h1>
 <ProductForm onSubmit={handleCreateOrUpdate} 
selectedProduct={selectedProduct} />
 <ProductList products={products} onDelete={handleDelete} onEdit={handleEdit} />
 </div>
 );
}
export default App;