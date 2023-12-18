import { create } from 'zustand';

interface EditBlogModal {
  isOpen: boolean;
  blog: any;
  setBlog: (blog: any) => void;
  onOpen: () => void;
  onClose: () => void;
}

const useEditBlogModal = create<EditBlogModal>((set) => ({
  isOpen: false,
  blog: [],
  setBlog: (blog) => set({ blog: blog }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useEditBlogModal;
