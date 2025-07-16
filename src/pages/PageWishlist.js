import { useState } from "react";
import { wishlistItems as initialWishlistItems, justForYouItems } from "../data/productWishlist";
import WishlistItem from "../components/WishlistItem";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";

export default function PageWishlist() {
    const [wishlist, setWishlist] = useState(initialWishlistItems);

    const handleRemoveFromWishlist = (id) => {
        const newList = wishlist.filter((item) => item.id !== id);
        setWishlist(newList);
    };

    const handleAddToCart = (item) => {
        console.log("Add to cart:", item.name);
    };

    const handleMoveAllToBag = () => {
        console.log("Moved all to cart!");
        setWishlist([]);
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
            <Header />

            {/* Main Content */}
            <main style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '32px 20px'
            }}>
                {/* Wishlist Section */}
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0',
                    padding: '24px',
                    marginBottom: '32px'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '24px'
                    }}>
                        <h2 style={{
                            fontSize: '20px',
                            fontWeight: '600',
                            margin: 0
                        }}>
                            Wishlist ({wishlist.length})
                        </h2>
                        <button
                            style={{
                                padding: '8px 16px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                backgroundColor: 'white',
                                cursor: 'pointer'
                            }}
                            onClick={handleMoveAllToBag}
                        >
                            Move All To Bag
                        </button>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '24px'
                    }}>
                        {wishlist.map((item) => (
                            <WishlistItem
                                key={item.id}
                                item={item}
                                onRemove={handleRemoveFromWishlist}
                                onAddToCart={handleAddToCart}
                            />
                        ))}
                    </div>
                </div>

                {/* Just For You Section */}
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0',
                    padding: '24px'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '24px'
                    }}>
                        <h2 style={{
                            fontSize: '20px',
                            fontWeight: '600',
                            margin: 0
                        }}>
                            Just For You
                        </h2>
                        <button style={{
                            padding: '8px 16px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            backgroundColor: 'white',
                            cursor: 'pointer'
                        }}>
                            See All
                        </button>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '24px'
                    }}>
                        {justForYouItems.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}