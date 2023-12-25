import React , {Fragment , useRef , useContext} from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { IoCloseOutline } from 'react-icons/io5';
import { LanguageContext } from '../context/language';

const MyModal = (props) => {

  const {children , open ,setOpen} = props
  const cancelButtonRef = useRef(null);
  const { lang } = useContext(LanguageContext);

  
  const closeIconStyles = {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
  };

  return (
    <Transition.Root show={open} as={Fragment}>
    <Dialog
      as="div"
      className="relative z-10"
      initialFocus={cancelButtonRef}
      onClose={setOpen}
    >
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition.Child>
      <div
        dir={lang === "fa-IR" ? "rtl" : "ltr"}
        className="fixed inset-0 z-10 w-screen overflow-y-auto"
      >
        <div className="flex h-full relativeitems-end justify-center items-center p-4 sm:items-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel className="relative transform overflow-hidden rounded-lg projects-gradient shadow-xl transition-all sm:my-8 min-w-screen- sm:w-full sm:max-w-lg">
              <span
                style={closeIconStyles}
                className="glassMorphism rotate-animation2"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <IoCloseOutline className="text-3xl scale-animation2" />
              </span>

        {children}



        </Dialog.Panel>
        </Transition.Child>
      </div>
      </div>
      </Dialog>
      </Transition.Root>
  )
}

export default MyModal
