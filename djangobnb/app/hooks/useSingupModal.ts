import { create } from "zustand";


interface SingupModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;

}

const useSingupModal = create <SingupModalStore>((set) => ({
  isOpen: false,
  open: () => set({isOpen: true}),
  close: () => set({isOpen: false}),
}));

export default useSingupModal;