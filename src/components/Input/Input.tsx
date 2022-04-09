interface Props {
  type?: "text" | "button" | "url" | "checkbox" | "file";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: React.FC<Props> = ({ type = "text", onChange, value }) => (
  <input type={type} onChange={onChange} value={value} />
);

export default Input;
