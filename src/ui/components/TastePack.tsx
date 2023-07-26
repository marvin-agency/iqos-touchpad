import { ITastePack } from "../../types";
import { Typography } from "../Typograhy";
import tw from "twin.macro";

export const TastePack = ({
  tastePack,
  variant,
}: {
  tastePack: ITastePack;
  variant: "light" | "dark";
}) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={tastePack.image}
        alt={tastePack.name}
        className="inline-block w-auto"
      />
      {tastePack?.brand && (
        <Typography.BodyMedium
          containerCss={[
            tw`font-400 text-secondary text-[18px] leading-[28px]`,
            variant === "light" && tw`text-white`,
          ]}
        >
          {tastePack.brand}
        </Typography.BodyMedium>
      )}
      <Typography.BodyMedium
        containerCss={[
          tw`font-700 text-secondary text-center text-[18px] leading-[28px]`,
          variant === "light" && tw`text-white`,
        ]}
      >
        {tastePack.name}
      </Typography.BodyMedium>
    </div>
  );
};
