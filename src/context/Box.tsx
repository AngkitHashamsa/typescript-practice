import { useThemeContext } from "./ThemeContext";
const Box = () => {
  const value = useThemeContext();
  console.log(value);

  return <div style={{ background: value.primary.main }}>what i need</div>;
};

export default Box;
