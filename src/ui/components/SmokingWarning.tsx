import { Typography } from "../Typograhy";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";

export const SmokingWarning = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center bg-white p-12">
      <Typography.H3 containerCss={[tw`text-black text-center font-bold`]}>
        {t("antiSmoking")}
      </Typography.H3>
    </div>
  );
};
