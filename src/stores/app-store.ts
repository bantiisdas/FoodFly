import { create } from "zustand";

interface UserCredential {
  name: string;
  id: string;
  password: string;
}

interface appStore {
  isOnboarded: boolean;
  isAuthenticated: boolean;
  setIsOnboarded: () => void;
  setIsAuthenticated: () => void;
  userCreds: UserCredential[];
  addUser: ({ name, id, password }: UserCredential) => void;
}

export const useAppStore = create<appStore>()((set, get) => ({
  userCreds: [],
  isOnboarded: false,
  isAuthenticated: false,
  setIsOnboarded: () =>
    set((state) => ({
      isOnboarded: !state.isOnboarded,
    })),
  setIsAuthenticated: () =>
    set((state) => ({
      isAuthenticated: !state.isAuthenticated,
    })),
  addUser: (userDetails) =>
    set((state) => ({
      userCreds: state.userCreds.some((user) => user.id === userDetails.id)
        ? state.userCreds
        : [userDetails, ...state.userCreds],
    })),
}));
