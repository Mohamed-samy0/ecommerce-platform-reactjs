import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCompareStore = create(
  persist(
    (set, get) => ({
      compareItems: [],
      addToCompare: (product) => {
        const currentItems = get().compareItems;
        if (currentItems.find((item) => item.id === product.id)) return;
        if (currentItems.length >= 2) {
          set({ compareItems: [...currentItems.slice(1), product] });
        } else {
          set({ compareItems: [...currentItems, product] });
        }
      },
      
      removeFromCompare: (productId) => {
        set({
          compareItems: get().compareItems.filter((item) => item.id !== productId),
        });
      },
    }),
    {
      name: "compare-storage",
    },
  ),
);

export default useCompareStore;
