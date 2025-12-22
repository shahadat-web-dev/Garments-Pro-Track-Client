export const fetchProducts = async (limit = 6) => {
  const res = await fetch(`https://garments-order-tracker-sarver.vercel.app/api/products?limit=${limit}`);
  const data = await res.json();
  return data;
};
