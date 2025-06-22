import { Link } from "react-router-dom"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
export const AboutUs = ()=>{


    return(<>
    <Navbar />
    
<div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Welcome to <span className="font-semibold text-black">Shopify</span>, your number one destination for the best quality products. Our mission is to simplify online shopping by providing a seamless and trusted experience for everyone.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Team working"
            className="w-full rounded-lg shadow-md object-cover h-80"
          />

          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              We are a team of passionate individuals committed to creating a better shopping experience. Whether you're looking for fashion, gadgets, or everyday essentials, we’ve got you covered.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Trusted by 10,000+ customers</li>
              <li>Fast and secure checkout</li>
              <li>24/7 customer support</li>
              <li>Free returns and easy refunds</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-2">Join Our Journey</h2>
          <p className="text-gray-600 mb-4">
            We’re on a mission to change the way you shop online. Be a part of it.
          </p>
          <Link to="/products">
          <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
            Explore Our Products
          </button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    
    </>)
}