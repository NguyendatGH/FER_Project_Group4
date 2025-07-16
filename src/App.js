import React, { useState } from "react"
import "./App.css"
import { wishlistItems as data } from "./data/productWishlist"
import WishlistItem from "./components/WishlistItem"
import PageWishlist from './pages/PageWishlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";

function App() {
  const [wishlist, setWishlist] = useState(data)

  const handleRemoveFromWishlist = (id) => {
    const updated = wishlist.filter(item => item.id !== id)
    setWishlist(updated)
  }

  const handleAddToCart = (item) => {
    console.log("Add to cart:", item.name)
  }

  const handleMoveAllToBag = () => {
    console.log("Move all to cart")
    setWishlist([])
  }

  return (
    <div>
      <PageWishlist
        wishlist={wishlist}
        onRemove={handleRemoveFromWishlist}
        onAddToCart={handleAddToCart}
        onMoveAll={handleMoveAllToBag}
      />
      <Footer />
    </div>
  );
}

export default App;
