type TextOwnProps<E extends React.ElementType> = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
  component?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

const Typography = <E extends React.ElementType = 'div'>({ size, color, component, children }: TextProps<E>) => {
  const Component = component || 'div';
  return <Component className={`with-class-${size}-${color}`}>{children}</Component>;
};

export default Typography;
