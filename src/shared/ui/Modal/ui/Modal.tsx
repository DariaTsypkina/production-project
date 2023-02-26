import { FC, useCallback, useEffect, useRef, useState } from "react";

import { classnames } from "shared/lib/classnames/classnames";
import { useTheme } from "shared/lib/useTheme/useTheme";
import { Portal } from "shared/ui/Portal";
import CloseIcon from "shared/assets/icons/close.svg";
import { Button } from "shared/ui/Button";
import s from "./Modal.module.scss";

export interface ModalProps {
  lazy?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
  const { lazy, isOpen, onClose, className, children } = props;

  const { theme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, boolean> = {
    [s.opened]: isOpen,
    [s.isClosing]: isClosing,
  };

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const handleContentClick = (e: React.MouseEvent) => e.stopPropagation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    isOpen && setIsMounted(true);
  }, [isOpen]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classnames("", [theme], {})}>
        <div className={classnames(s.Modal, [className], mods)}>
          <div className={s.overlay} onClick={handleClose}>
            <div className={s.content} onClick={handleContentClick}>
              <Button className={s.closeBtn} onClick={handleClose}>
                <CloseIcon />
              </Button>
              {children}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

