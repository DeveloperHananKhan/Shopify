import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
export const ContactUs = () => {


  
  return (<>
    <Navbar />
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6  dark:text-white">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto  dark:text-white">
          We’d love to hear from you! Whether you have a question, feedback, or need support—our team is here to help.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
       
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium  dark:text-white">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black  dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium  dark:text-white">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black  dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium  dark:text-white">Message</label>
              <textarea
                rows={5}
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black  dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition  dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-400 px-4 py-2 rounded transition"
            >
              Send Message
            </button>
          </form>

          
          <div className="bg-gray-50 p-6 rounded-md shadow-sm border border-gray-200 dark:bg-gray-800">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Our Office</h2>
            <p className="text-gray-600 mb-2 dark:text-white">
              <strong>Address:</strong><br />
              123 Commerce Street, Suite 500<br />
              Lagos, Nigeria
            </p>
            <p className="text-gray-600 mb-2 dark:text-white">
              <strong>Email:</strong> support@yourshop.com
            </p>
            <p className="text-gray-600 mb-6 dark:text-white">
              <strong>Phone:</strong> +234 901 234 5678
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2 dark:text-white">Business Hours</h3>
              <p className="text-gray-600 dark:text-white">Monday – Friday: 9AM – 6PM</p>
              <p className="text-gray-600 dark:text-white">Saturday: 10AM – 2PM</p>
              <p className="text-gray-600 dark:text-white">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>);
};