type RestrictingPropsProps = {
  value: number;
};

type PositiveNumber = RestrictingPropsProps & {
   isPositive:boolean,
   isZero?:never,
   isNegative?:never
}

type NegativeNumber=RestrictingPropsProps & {
    isNegative:boolean,
    isZero?:never,
    isPositive?:never
}

type Zero=RestrictingPropsProps & {
    isZero:boolean,
    isPositive?:never,
    isNegative?:never
}

type RandomNumber=PositiveNumber | NegativeNumber | Zero

export const RestrictingProps = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumber) => {
  return (
    <div>
      {value}
      {isPositive && "positive"}
      {isNegative && "Negative"}
      {isZero && "Zero"}
    </div>
  );
};
