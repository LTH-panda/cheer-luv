import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Overlay from "../0verlay";

type Props = {
  isVisible: boolean;
  onBackDrop: () => void;
  children: React.ReactNode;
};

function Modal({ isVisible, onBackDrop, children }: Props) {
  return (
    <>
      <Overlay isVisible={isVisible} onBackDrop={onBackDrop} />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300 }}
            className="fixed top-1/2 left-1/2"
          >
            <div className="bg-white sm:rounded-xl -translate-y-1/2 -translate-x-1/2 w-screen h-screen max-w-2xl md:h-96 p-4 flex flex-col">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Modal;
