import { FC } from "react";
import "./input.css";
import { ChangeEventHandler } from 'react'

type inputStyles = 'default' | 'description'

interface IInputProps {
  placeholder: string,
  style: inputStyles,
  value ?: string,
  onChange ?: ChangeEventHandler,
  name ?: string,
  ref ?: string
}

export const Input: FC<IInputProps> = ({ style, name, ref, onChange, value, placeholder, ...props }) => {
  const rootClasses = ["my-input"];

  if (style == "default") {
    rootClasses.push("default-input");
  }
  if (style == "description") {
    rootClasses.push("description-input");
  }

  return (
    <textarea
      {...props}
      placeholder={placeholder}
      className={rootClasses.join(" ")}
      value={value}
      onChange={onChange}
      name={name}
      ref={ref}
    />
  );
};
