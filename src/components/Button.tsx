import { ReactNode } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}

const Button = ({ children, color = "danger", onClick }: Props) => {
  return (
    <>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
