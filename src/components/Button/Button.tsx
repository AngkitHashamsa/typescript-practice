interface Props {
  title: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "reset" | "submit";
}

const Button: React.FC<Props> = ({ title, onClick, type }) => (
  <button onClick={onClick} type={type}>
    {title}
  </button>
);

export default Button;
