interface Props {
  children: string;
}
const Header: React.FC<Props> = ({ children }) => <h2>Header {children}</h2>;

export default Header;
