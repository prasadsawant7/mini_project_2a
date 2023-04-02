import { useEffect, useState } from "react";
import "./Blogs.css";

export default function Blogs() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/product");
        const body = await res.json();
        if (body.status === "ok") {
          setProducts(body.data);
        }
        // console.log(products);
      } catch (err) {
        console.log("Can't fetch from API");
      }
    })();
  }, [products]);

  return (
    <div className="blogs">
      <table id="products">
        <thead>
          <tr>
            <th>Name</th>
            <th>Qnt In Stock</th>
            <th>Qnt Sold</th>
            <th>Unit Price</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.quantity_in_stock}</td>
              <td>{product.quantity_sold}</td>
              <td>{product.unit_price}</td>
              <td>{product.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
