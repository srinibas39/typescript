import { CustomButton } from "./CustomButton";

export const WrappingHTML = () => {
  return (
    <div>
      <CustomButton variant={"primary"} onClick={() => console.log("clicked")}>
        hello I am button
      </CustomButton>
    </div>
  );
};
