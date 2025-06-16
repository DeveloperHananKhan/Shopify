import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useData } from "../API/Product";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const Home = () => {
  const { dat, loading } = useData();

  return (
    <>
      <Navbar />

      <div>
        <HeroSection />
      </div>

      <hr className="my-8 border-t border-gray-300" />

      <section className="bg-white py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Products
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="border p-4 rounded-lg shadow animate-pulse"
                  >
                    <Skeleton height={160} />
                    <Skeleton width={100} className="mt-2" />
                    <Skeleton width={80} />
                  </div>
                ))
              : dat.slice(0, 8).map((product) => (
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
                    <p className="text-gray-900 font-semibold">
                      ${product.price}
                    </p>
                  </div>
                ))}
          </div>

          {!loading && (
            <div className="text-center mt-8">
              <Link to="/products">
                <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
                  View All Products
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};
