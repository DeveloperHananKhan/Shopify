# React + TypeScript + Vite

```
// Details //

-- Description --
. A responsive wallet and cart system built using React, Zustand for global state management, and Tailwind CSS for styling. Users can:

. Manage wallet balance (add/withdraw)

. Add items to cart and checkout

. Handle payments using wallet funds


-- Features --
. 🔐 Login system 

.. 🛒 Cart functionality with quantity control

. 💼 Wallet with dynamic balance

. ✅ Checkout with balance verification

. 💬 Toast notifications for feedback

. 📦 Persistent state via localStorage

--Tech Stack--
. React.js

. Zustand (state management)

. Tailwind CSS

. React Router

. React Toastify

--Folder Structure --

/src
  /components   # Reusable UI components (Navbar, Footer, etc.)
  /pages        # Page components (Cart, Wallet, Checkout, logIn)
  /store        # Zustand stores (Cart.ts, Wallet.ts)
  /api          # API logic


  # 1. Clone the repo
git clone https://github.com/your-username/your-repo-name.git

# 2. Install dependencies
yarn install
# or
npm install

# 3. Start the development server
yarn dev
# or
npm run dev