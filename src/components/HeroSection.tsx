import { Link } from "react-router-dom";
export const HeroSection = () => {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Step Into Style with Confidence
              </h2>
              <p className="mt-4 text-gray-600">
                Discover the latest trends in fashion,footwear and jewelerry. Quality
                products. Affordable prices. Delivered to your doorstep.
              </p>
              <Link to = "/products">
              <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                Shop Now
              </button>
              </Link>
            </div>

            <div className="w-full min-h-[300px] overflow-hidden rounded-lg">
   <img
    src="https://www.boostmybudget.com/wp-content/uploads/2021/08/best-mystery-shopping-companies-uk.jpg"
    alt="Fashion Model"
    className="w-full h-full object-cover"
  />

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
