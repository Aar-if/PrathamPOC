import {create} from 'zustand';
import { persist } from 'zustand/middleware';

const homeStore = create(persist((set) => ({
  value: '',
  setValue: (newValue) => set((state) => ({ value: newValue })),
}), {
  name: 'reactappZustand', 
  getStorage: () => localStorage, 
}));


export default homeStore ;
