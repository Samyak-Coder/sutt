import {create} from 'zustand';

export const useHabbitsStore = create((set)=>({
    habbits: [],
    addHabbit: (habbit) => set((state) => ({habbits: [...state.habbits,  ...habbit]})),
    rmHabbit: (habbitId) => set((state)=>({habbits: state.habbits.filter((habbit)=> habbit.id!=habbitId)}))
}))