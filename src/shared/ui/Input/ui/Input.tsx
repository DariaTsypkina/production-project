import { ChangeEvent, forwardRef, InputHTMLAttributes, memo } from "react";

import { classnames } from "shared/lib/classnames/classnames";
import s from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
>;

interface InputProps extends HTMLInputProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  onChangeRaw?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const _Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, value, onChange, onChangeRaw, className, ...otherProps } =
    props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => (
    onChange?.(e.target.value), onChangeRaw?.(e)
  );

  return (
    <label className={classnames(s.label, [className], {})}>
      {!!label && <p className={s.labelText}>{label}</p>}
      <input
        {...otherProps}
        ref={ref}
        value={value}
        className={s.input}
        onChange={handleChange}
      />
    </label>
  );
});

export const Input = memo(_Input);

