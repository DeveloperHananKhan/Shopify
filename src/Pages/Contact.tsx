import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
export const ContactUs = () => {


  
  return (<>
    <Navbar />
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have a question, feedback, or need support—our team is here to help.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
       
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows={5}
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>

          
          <div className="bg-gray-50 p-6 rounded-md shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong><br />
              123 Commerce Street, Suite 500<br />
              Lagos, Nigeria
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> support@yourshop.com
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Phone:</strong> +234 901 234 5678
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Business Hours</h3>
              <p className="text-gray-600">Monday – Friday: 9AM – 6PM</p>
              <p className="text-gray-600">Saturday: 10AM – 2PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>);
};