export const fetchProducts = async (limit = 6) => {
  const res = await fetch(`http://localhost:3000/api/products?limit=${limit}`);
  const data = await res.json();
  return data;
};
