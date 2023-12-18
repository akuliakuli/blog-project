import { create } from 'zustand';

interface CreateNewBlogModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCreateNewBlogModal = create<CreateNewBlogModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useCreateNewBlogModal;
