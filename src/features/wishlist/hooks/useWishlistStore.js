import { create } from "zustand";
import { persist } from "zustand/middleware"; // Because save the data
import toast from 'react-hot-toast';

const useWishlistStore = create(
    persist((set, get) => ({
    items: [],

    addToWishlist: (product) => {
        const items = get().items;
        const exists = items.find((item) => item.id === product.id);
        if (exists) return;
        set({ items: [...items, product] });
    },

    // Partial implementation — students should complete this
    removeFromWishlist: (productId) => {
        set({
            items : get().items.filter((item) => item.id !== productId),
        })
    },

    toggleWishlist: (product) => {
        const inWishlist = get().isInWishlist(product.id);
        if(inWishlist) {
            get().removeFromWishlist(product.id);
            toast('Removed from wishlist', {icon: '💔', id: `wish-${product.id}` });
        }else{ 
            get().addToWishlist(product);
            toast.success('Added to wishlist!', { icon: '❤️', id: `wish-${product.id}` });
        }
    },

    isInWishlist: (productId) => {
        return get().items.some((item) => item.id === productId);
    },
  }),
    {
        name: "wishlist-storage",
    }
 )
)

export default useWishlistStore;
