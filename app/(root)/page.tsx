import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <h1>Hello from Vercel</h1>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </>
  );
};

export default HomePage;
