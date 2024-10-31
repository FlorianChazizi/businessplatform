import { create } from 'zustand';

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

interface UserStore {
    user: User | null;
    update: ( user: User ) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    update: (user) =>  set (() => ({ user }))
}));