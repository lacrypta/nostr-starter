import { create } from 'zustand';

export type Section = 'profile' | 'badges';

interface NavState {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export const useNavStore = create<NavState>()((set) => ({
  activeSection: 'profile',
  setActiveSection: (section) => set({ activeSection: section }),
}));
