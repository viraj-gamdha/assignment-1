import type { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => {
  return <button className={styles.primary} {...props}>{children}</button>;
};

export default Button;
