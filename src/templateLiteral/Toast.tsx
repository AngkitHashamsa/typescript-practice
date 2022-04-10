type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

// * exclude for excluding repetead center-center
type Props = {
  position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center';
};

const Toast = ({ position }: Props) => {
  return <div>Toast {position}</div>;
};

export default Toast;
