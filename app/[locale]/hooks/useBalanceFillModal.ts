import { create } from 'zustand';

interface BalanceFillModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useBalanceFillModal = create<BalanceFillModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useBalanceFillModal;
