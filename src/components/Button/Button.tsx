import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}

const Button = ({ children, color = "danger", onClick }: Props) => {
  return (
    <>
      <button
        className={[styles.btn, styles.btnDanger].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
