// store/useUserStore.ts

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  username: string;
  email: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set(() => ({ user })),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage', // The key name in local storage
    }
  )
);
