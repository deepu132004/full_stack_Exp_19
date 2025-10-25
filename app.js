import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products from backend API
    axios.get("http://localhost:5000/api/products")
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to fetch products.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Product List</h1>
      <ul>
        {products.map((p, index) => (
          <li key={index}>
            <strong>{p.name}</strong> - ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
