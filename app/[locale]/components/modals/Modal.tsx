'use client';

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  title, 
  body, 
  actionLabel, 
  disabled,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
  
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300)
  }, [onClose, disabled]);


    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }

        onSubmit && onSubmit();
        onClose()
        }, [onSubmit, disabled]);


  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70
          backdrop-blur      
        "
      >
        <div className="
    
          relative 
          mt-8
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/6
          my-6
          mx-auto 
          p-2
          lg:p-0
          
          "
        >
          {/*content*/}
          <div 
            style={{borderRadius:"20px"}}
            className={`
            translate
            duration-300
          
            h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}>
            <div 
              style={{borderRadius:"20px"}}
              className="
              translate
              h-min
              border-0 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-[100%]
              bg-white 
              outline-none 
              focus:outline-none
              rounded-lg

            "
            >
              {/*header*/}
              <div className="
                flex 
                items-center 
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
                "
              >
                {/* <div style={{backgroundImage: `url("https://m.media-amazon.com/images/I/71OKkF4sWCL.jpg")`, height:"100px", objectFit:"fill",borderTopLeftRadius:"20px", borderTopRightRadius:"20px"}} className="bg-left-bottom	rounded-t	absolute object-cover w-full flex flex-row justify-center items-center">
                      <div className="flex flex-col items-start justify-center ">
                      <h1 className="text-2xl	 text-blue-900 font-mono	">Lorem ipsum dolor sit amet.</h1>
                      <p className="text-sm font-mono		">Hello world</p>
                      </div>
                </div> */}
                <button
                  aria-pressed="false"
                  className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    right-10
                    top-30
                  "
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">
                  {title}
                </div>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto h-full">
                {body}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
