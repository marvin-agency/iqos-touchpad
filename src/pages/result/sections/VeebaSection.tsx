import NameRectangle from "../../../assets/images/nameRectangle.png";
import { Typography } from "../../../ui/Typograhy";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { Button } from "../../../ui/buttons/Button";
import Veeba from "../../../assets/images/Vaping_device_Iqos_Veeba.png";
import VeevNow from "../../../assets/images/Vaping_device_Veev_Now.png";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { routes } from "../../../navigation/routes";
import { ISection } from "../../../types";
import { TastePackCollapsible } from "../collapsibles/TastePackCollapsible";
import { Assets } from "../../../assets/assets";

export const VeebaSection = ({
  hasCollapsible = true,
  hasGoToStart = false,
  taste,
}: ISection) => {
  const { t } = useTranslation();
  const language = i18n.language;
  const isCz = language === "cz";
  const image = isCz ? VeevNow : Veeba;

  return (
    <div
      className={`overflow-hidden ${
        isCz
          ? "bg-gradient-to-r bg-blue-gradient-from bg-blue-gradient-to"
          : "bg-dark-blue"
      }  pt-10`}
    >
      <div
        className={`flex ${
          isCz
            ? "bg-gradient-to-r bg-blue-gradient-from bg-blue-gradient-to"
            : "bg-dark-blue"
        }`}
      >
        <div className="relative flex flex-1">
          <img
            src={image}
            alt={"Veev"}
            className={`${
              !isCz ? "scale-75" : "-mr-4 mt-[11%]"
            } object-contain object-top`}
          />
        </div>
        <div className="z-50 mt-20 flex flex-1 flex-col items-start gap-5">
          <img src={NameRectangle} alt={"name-rectangle"} />
          <Typography.BodyMedium
            containerCss={[
              tw`ml-4 -mt-[50px] uppercase font-700 text-[20px] leading-[28px]`,
            ]}
          >
            {t("vapers").toUpperCase()}
          </Typography.BodyMedium>
          <Typography.H2>{isCz ? "VEEV NOW" : "VEEBA"}</Typography.H2>
          <Typography.Button
            containerCss={[tw` mb-4 max-w-[80%] text-[22px] leading-[33px]`]}
          >
            {t("veebaDescription")}
          </Typography.Button>

          {hasCollapsible && (
            <TastePackCollapsible
              taste={taste}
              title={t("discoverVeebaFlavours")}
              product={"veeba"}
              variant={"light"}
            />
          )}
        </div>
      </div>
      {hasGoToStart && (
        <div className="mb-64 mt-20 flex flex-col items-center justify-center">
          <Button.Contained variant={"dark"}>
            {t("callIQOSPro")}
          </Button.Contained>
          <Typography.BodyMedium
            containerCss={[
              tw`flex items-center space-x-4 pt-12`,
              isCz && tw`text-white`,
            ]}
          >
            <Assets.ChevronLeft />
            <Link
              to={routes.WELCOME}
              className={
                "text-[25px] leading-[38px] underline underline-offset-4"
              }
            >
              {t("returnToProductAdvisor")}
            </Link>
          </Typography.BodyMedium>
        </div>
      )}
    </div>
  );
};
