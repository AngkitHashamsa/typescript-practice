interface Props {
  styles?: React.CSSProperties;
}

const Container: React.FC<Props> = ({ styles }) => (
  <div style={styles}>
    <h2> Container</h2>
  </div>
);

export default Container;
