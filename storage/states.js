import {create} from 'zustand'

export const useStore = create((set) => ({
  selected: null,
  setSelected: (item) => set({ selected: item }),
  clearSelected: () => set({ selected: null }),
}))