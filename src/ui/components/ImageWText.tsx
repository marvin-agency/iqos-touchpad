import { Typography } from "../Typograhy";
import tw from "twin.macro";

export const ImageWText = ({
  image,
  text = "",
  id,
  imageWidthPercentage = 30,
  isSelected = false,
  onPress = () => {},
}) => {
  return (
    <div
      key={id}
      className={`flex max-w-[290px] flex-col items-center gap-y-5 text-center transition-all`}
      onClick={onPress}
    >
      <img
        src={image}
        alt={image.toString()}
        className={`flex w-[290px] h-[190px] rounded-[8px] border-2 object-cover transition-all  ${
          isSelected ? "border-primary" : "border-transparent"
        }`}
      />
      <Typography.BodySmall
        containerCss={isSelected ? [tw`text-primary text-[22px]`] : [tw`text-[22px]`]}
      >
        {text}
      </Typography.BodySmall>
    </div>
  );
};
