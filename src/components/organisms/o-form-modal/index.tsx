import type { Dispatch, SetStateAction } from 'react';
import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MdClose } from 'react-icons/md';

interface FormModalProps {
    title: string;
    showTitle?: boolean;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    children?: React.ReactNode;
    width?: string;
    className?: string;
    autoClose?: boolean;
}

function FormModal({
    title,
    showTitle = true,
    isOpen,
    setIsOpen,
    children,
    width = 'w-full md:w-[33rem] lg:w-[43rem] xl:w-[50rem]',
    className,
    autoClose = true,
}: FormModalProps) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className={`fixed inset-0 z-[20] overflow-y-auto ${className}`}
                onClose={() => {
                    if (autoClose) {
                        return setIsOpen(false);
                    }
                    return null;
                }}
            >
                <div className="min-h-screen px-4 text-center">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="inline-block h-screen align-middle" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div
                            className={`my-8 inline-block transform bg-white ${
                                showTitle ? 'rounded-md px-5 py-3 ' : 'rounded-lg px-0 py-0'
                            }  text-left align-middle shadow-xl transition-all ${width || ''}`}
                        >
                            {showTitle && (
                                <Dialog.Title as="div" className="flex border-b-2 border-gray-400 py-2">
                                    <div className="w-[95%] text-center text-lg font-medium text-primaryColor">
                                        <span>{title}</span>
                                    </div>
                                    <div className="w-[5%]">
                                        <button type="button" onClick={() => setIsOpen(false)}>
                                            <MdClose />
                                        </button>
                                    </div>
                                </Dialog.Title>
                            )}

                            {/* {showTitle && <hr className="mt-2" />} */}

                            {children}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}

export default FormModal;
