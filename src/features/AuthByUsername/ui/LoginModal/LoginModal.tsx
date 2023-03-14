import { FC, Suspense } from "react";

import { classnames } from "shared/lib/classnames/classnames";
import { Loader } from "shared/ui/Loader";
import { Modal, ModalProps } from "shared/ui/Modal";
import { LoginFormLazy } from "../LoginForm/LoginForm.lazy";

interface LoginModalProps extends ModalProps {
  className?: string;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <Modal {...otherProps} lazy className={classnames("", [className], {})}>
      <Suspense fallback={<Loader />}>
        <LoginFormLazy isOpen={otherProps.isOpen} />
      </Suspense>
    </Modal>
  );
};
