import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useData } from "../API/Product";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export const AllProducts = () => {
  const { dat, loading } = useData();

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="border p-4 rounded shadow animate-pulse">
              <Skeleton height={160} />
              <Skeleton width={100} className="mt-2" />
              <Skeleton width={80} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  p-10">
          {dat.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain mb-4"
              />
              <h3 className="text-sm font-medium text-gray-700">
                {product.title}
              </h3>
              <p className="text-gray-900 font-semibold">${product.price}</p>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
};
