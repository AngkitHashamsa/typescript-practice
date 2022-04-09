interface Props {
  children: React.ReactNode;
}
const Children: React.FC<Props> = ({ children }) => <div>{children}</div>;

export default Children;
