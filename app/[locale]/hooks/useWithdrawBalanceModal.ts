import { create } from 'zustand';

interface WithdrawBalanceModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useWithdrawBalanceModal = create<WithdrawBalanceModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useWithdrawBalanceModal;
