import { Typography } from "../Typograhy";
import tw from "twin.macro";
import { Trans, useTranslation } from "react-i18next";
import { deviceType, IQOS_DEVICE } from "../../shared/utils";
import i18next from "i18next";

export const ResultHeader = ({ result }: { result: IQOS_DEVICE[] }) => {
  const { t } = useTranslation();
  const deviceTypes = (result || []).map((d) => deviceType[d]);
  const isVape = deviceTypes.includes("vape");
  const isCz = i18next.language === "cz";

  const isVapeTobacco =
    deviceTypes.length === 2 &&
    deviceTypes[0] === "vape" &&
    deviceTypes[1] === "tobacco";

  const isTobaccoVape =
    deviceTypes.length === 2 &&
    deviceTypes[0] === "tobacco" &&
    deviceTypes[1] === "vape";

  const isLight =
    result?.[0] === "veeba" ||
    result?.[0] === "lilSolid" ||
    (isCz && result?.[0] === "veev");

  const headerText = isVapeTobacco
    ? "chooseCombinationVapeTobacco"
    : isTobaccoVape
    ? "chooseCombinationTobaccoVape"
    : isVape
    ? "chooseOnlyVape"
    : "chooseOnlyTobacco";

  const descriptionText = isVapeTobacco
    ? t("chooseCombinationVapeTobaccoDesc")
    : isTobaccoVape
    ? t("chooseCombinationTobaccoVapeDesc")
    : isVape
    ? t("chooseOnlyVapeDesc")
    : t("chooseOnlyTobaccoDesc");

  return (
    <div className="mb-16 ml-[8%] mt-[8%] max-w-[70%]">
      <Typography.H2 containerCss={[tw`mb-3`]}>
        {t("weRecommend")}
      </Typography.H2>
      <Typography.H2
        containerCss={[
          tw`text-secondary font-400 mb-8 leading-snug text-[50px]`,
          isLight && tw`text-white`,
        ]}
      >
        <Trans i18nKey={headerText} />
      </Typography.H2>
      <Typography.H3
        containerCss={[
          tw`text-secondary font-400  leading-snug text-[28px]`,
          isLight && tw`text-white`,
        ]}
      >
        {descriptionText}
      </Typography.H3>
    </div>
  );
};
