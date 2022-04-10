type RandomNumberType = {
  value: number;
};

// RandomNumberType &  means  extends
type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};

type ZeroNumber = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type Props = PositiveNumber | NegativeNumber | ZeroNumber;

const RandomNumber = ({ isNegative, isPositive, isZero, value }: Props) => (
  <div>
    {value} {isPositive && 'Positive'} {isNegative && 'isNegative'}
    {isZero && 'zero'}
  </div>
);

export default RandomNumber;
