import { FC } from "react";

import { classnames } from "shared/lib/classnames/classnames";
import { Modal, ModalProps } from "shared/ui/Modal";
import { LoginForm } from "../LoginForm/LoginForm";
import s from "./LoginModal.module.scss";

interface LoginModalProps extends ModalProps {
  className?: string;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <Modal
      {...otherProps}
      lazy
      className={classnames(s.LoginModal, [className], {})}
    >
      <LoginForm isOpen={otherProps.isOpen} />
    </Modal>
  );
};

