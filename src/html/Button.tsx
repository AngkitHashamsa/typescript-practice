import './Button.css';
// default children React.ReactNode which means it takes any tags
// if want only string to be able enter in button as children we use Omit
type ButtonProps = {
  variant?: 'primary' | 'outline' | 'secondary';
  rounded?: boolean;
  children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;

const Button = ({ variant = 'primary', children, rounded, ...rest }: ButtonProps) => (
  <button className={`btn btn-${variant} ${rounded && 'rounded'} `} {...rest}>
    {children}
  </button>
);

export default Button;
