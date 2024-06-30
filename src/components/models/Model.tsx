'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { FC, ReactElement, ReactNode } from 'react';
import React, {
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';

import { useIsClient } from '@/hooks/useIsClient';
import { useKeyPress } from '@/hooks/useKeyPress';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { fadeIn, slideIn } from '@/utils/motion';

interface ModalProps {
  children: ReactNode;
}

interface TriggerProps {
  name: string;
  children: ReactElement;
  // eslint-disable-next-line react/no-unused-prop-types
  onClick?: () => {};
}

interface WindowProps extends TriggerProps {}

interface WindowHeaderProps {
  title: string;
}

const ModalContext = createContext({
  open: (_val: string) => {},
  close: () => {},
  openName: '',
});

const Modal: FC<ModalProps> & {
  Trigger: typeof Trigger;
  Window: typeof Window;
  WindowHeader: typeof WindowHeader;
} = ({ children }) => {
  const [openName, setOpenName] = useState('');

  const close = useCallback(() => {
    setOpenName('');
  }, []);
  const open = setOpenName;

  const value = useMemo(
    () => ({ open, close, openName }),
    [open, close, openName],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

const Trigger: FC<TriggerProps> = ({ children, name, onClick }) => {
  const { open } = useContext(ModalContext);
  const onOpen = () => {
    open(name);
  };
  return cloneElement(children, { onClick: onClick || onOpen });
};

const Window: FC<WindowProps> = ({ children, name }) => {
  const { openName, close } = useContext(ModalContext);
  const isWindowOpen = openName === name;
  const { ref } = useOutsideClick({
    action: close,
    enable: isWindowOpen,
  });

  useKeyPress({
    key: 'Escape',
    action: close,
    enable: isWindowOpen,
  });

  const isClient = useIsClient();

  useEffect(() => {
    if (!isClient) return;
    const { body } = document;
    const rootNode = document.documentElement;
    if (isWindowOpen) {
      const { scrollTop } = rootNode;
      body.style.top = `-${scrollTop}px`;
      body.classList.add('no-scroll');
    } else {
      const top = parseFloat(body.style.top) * -1;
      body.classList.remove('no-scroll');
      if (top) {
        rootNode.scrollTop = top;
        body.style.top = '';
      }
    }
  }, [isClient, isWindowOpen]);

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence>
      {isWindowOpen ? (
        <motion.div
          variants={fadeIn}
          animate="show"
          initial="hidden"
          exit="hidden"
          className="fixed inset-0 z-50 flex size-full items-center  justify-center overflow-hidden bg-neutral-800/70 outline-none focus:outline-none"
        >
          <div className="relative ">
            <motion.div
              variants={slideIn('up', 'tween', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h-screen w-screen overflow-y-auto rounded-lg bg-white shadow-lg md:h-auto md:max-h-screen md:w-[420px]"
              ref={ref}
            >
              {cloneElement(children, { onCloseModal: close })}
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
};

const WindowHeader: FC<WindowHeaderProps> = ({ title }) => {
  const { close } = useContext(ModalContext);
  return (
    <header className=" relative flex  items-center justify-center  rounded-t border-b px-6 py-3">
      <button
        type="button"
        aria-label="close"
        className=" absolute left-6  border-0 p-1 transition hover:opacity-70"
        onClick={close}
      >
        <IoMdClose size={18} />
      </button>
      <h4 className="text-[18px] font-semibold">{title}</h4>
    </header>
  );
};

Modal.Trigger = Trigger;
Modal.Window = Window;
Modal.WindowHeader = WindowHeader;

export default Modal;
