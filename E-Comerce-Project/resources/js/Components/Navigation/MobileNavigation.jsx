import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function MobileNavigation() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function openCart() {
    console.log("Opening Cart");
  }

  function openMarked() {
    console.log("Opening Marked Items");
  }

  return (
    <>
      <button
        aria-label="Shopping Cart Toggler"
        type="button"
        className="fixed right-5 top-6 md:top-3 cursor-pointer rounded-md text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        onClick={openCart}
      >
        <CartIcon style="w-8 h-9" />
      </button>

      <button
        type="button"
        aria-label="Heart Marked Toggler"
        className="fixed right-16 top-6 md:top-3 cursor-pointer rounded-md text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        onClick={openMarked}
      >
        <HeartIcon style="w-8 h-8" />
      </button>

      <div className="flex items-center justify-center">
        <div className="fixed left-5 top-5">
          <button
            aria-label="Menu Toggler"
            type="button"
            onClick={openModal}
            className="md:hidden cursor-pointer rounded-md  text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <MenuIcon style="w-10 h-10" />
          </button>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 text-left align-top shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="mt-10 text-lg font-bold leading-6 text-gray-900"
                    >
                      EG-Jewelery
                    </Dialog.Title>
                    <div className="mt-52">
                      <ul className="text-3xl bold text-gray-500">
                        <li className="hover:underline focus:font-bold">
                          <a href="ohrringe">Ohrringe</a>
                        </li>
                        <li className="hover:underline">
                          <a href="ringe">Ringe</a>
                        </li>
                        <li className="hover:underline">
                          <a href="armbaender">Armbaender</a>
                        </li>
                        <li className="hover:underline">
                          <a href="halsketten">Halsketten</a>
                        </li>
                        <li className="hover:underline">
                          <a href="sets">Sets</a>
                        </li>
                      </ul>
                    </div>

                    <div className="fixed top-0 right-0 m-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-blue-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        X
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}

function MenuIcon(props) {
  const style = props.style;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={style}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        >
        </path>
      </svg>
    </>
  );
}

function CartIcon(props) {
  const style = props.style;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={style}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
        </path>
      </svg>
    </>
  );
}

function HeartIcon(props) {
  const style = props.style;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={style}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        >
        </path>
      </svg>
    </>
  );
}
