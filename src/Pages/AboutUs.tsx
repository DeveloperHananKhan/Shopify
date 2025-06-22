export const AboutUs = ()=>{


    return(<>
    
<section className="bg-gray-50 min-h-screen py-16 px-6">

  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Explore Our Premium Gear</h1>
    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Top-rated tech and lifestyle essentials to power your day. Free shipping on all orders above $50.</p>
    <div className="mt-6">
      <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">Shop Now</button>
    </div>
  </div>


  <div className="flex flex-wrap justify-center gap-4 mb-10">
    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">All</button>
    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">Headphones</button>
    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">Shoes</button>
    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">Watches</button>
    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">Accessories</button>
  </div>


  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
 
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
      <div className="relative">
        <img src="https://plus.unsplash.com/premium_photo-1680346529160-549ad950bd1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" className="w-full h-60 object-cover group-hover:scale-105 transition-transform" />
        <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">NEW</span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Noise Cancelling Headphones</h3>
        <p className="text-sm text-gray-500 mb-2">30hr Battery · Bluetooth 5.3</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-green-600">$129.00</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">Buy</button>
        </div>
      </div>
    </div>


    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
      <div className="relative">
        <img src="https://images.unsplash.com/photo-1709258228137-19a8c193be39?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" className="w-full h-60 object-cover group-hover:scale-105 transition-transform" />
        <span className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded">SALE</span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Running Shoes Pro</h3>
        <p className="text-sm text-gray-500 mb-2">Lightweight · Breathable</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-green-600">$89.99</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">Buy</button>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
      <div className="relative">
        <img src="https://images.unsplash.com/photo-1718309602791-8f3cc83840b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" className="w-full h-60 object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Smart Fitness Watch</h3>
        <p className="text-sm text-gray-500 mb-2">Heart Rate · Sleep Tracking</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-green-600">$149.00</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">Buy</button>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </>)
}