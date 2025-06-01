import type { Product } from "../types/Product";
interface Props {
 products: Product[];
 onDelete: (id: number) => void;
 onEdit: (product: Product) => void;
}
export default function ProductList({ products, onDelete, onEdit }: Props) {
 return (
 <ul>
 {products.map((product) => (
 <li key={product.id}>
 {product.name} - ${product.price} - Stock: {product.stock}
 <button onClick={() => onEdit(product)}>Editar</button>
 <button onClick={() => onDelete(product.id!)}>Eliminar</button>
 </li>
 ))}
 </ul>
 );
}
