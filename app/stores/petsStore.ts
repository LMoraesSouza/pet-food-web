import { create } from 'zustand';

export interface Pet {
  id: string;
  name: string;
  dailyFoodAmount: string;
  lastMeal: Number;
  feedingTimes: string[];
  lastFeedingDateTime: Date;
  birth: Date;
  foodName: string;
  weight: number;
}

interface PetsState {
  pets: Pet[];
  isLoading: boolean;
  reloadPets: (userId: string) => Promise<void>;
}

export const usePetsStore = create<PetsState>((set) => ({
  pets: [],
  isLoading: false,
  reloadPets: async (userId: string) => {
    if (!userId) return;
    set({ isLoading: true });

    try {
        const response = await fetch("/api/users/${userId}/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        
        set({ pets: data });
    } catch (error) {
        console.error('Error loading pets:', error);
    } finally {
        set({ isLoading: false });
    }
  },
})); 