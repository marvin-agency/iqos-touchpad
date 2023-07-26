import NameRectangle from "../../../assets/images/nameRectangle.png";
import { Typography } from "../../../ui/Typograhy";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { Button } from "../../../ui/buttons/Button";
import Veev from "../../../assets/images/Vaping_device_Iqos_Veev.png";
import VeevOne from "../../../assets/images/Vaping_Device_Veev_One.png";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { routes } from "../../../navigation/routes";
import { ISection } from "../../../types";
import { TastePackCollapsible } from "../collapsibles/TastePackCollapsible";
import { Assets } from "../../../assets/assets";

/** @jsxImportSource @emotion/react */

export const VeevSection = ({
  hasCollapsible = true,
  hasGoToStart = false,
  taste,
}: ISection) => {
  const { t } = useTranslation();
  const language = i18n.language;
  const isCz = language === "cz";
  const image = isCz ? VeevOne : Veev;

  return (
    <div
      className={`overflow-hidden ${
        isCz ? "bg-darkest-blue" : "bg-blue"
      }  pt-10`}
    >
      <div
        className={`flex overflow-hidden ${
          isCz ? "bg-darkest-blue" : "bg-blue"
        }`}
      >
        <div
          className={`relative ${
            isCz ? "-mr-3 mt-[4%]" : "-mt-[7%]"
          }  flex flex-1 `}
        >
          <img src={image} alt={"Veev"} className="object-contain object-top" />
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
          <Typography.H2>{isCz ? "VEEV ONE" : "IQOS VEEV"}</Typography.H2>
          <Typography.Button
            containerCss={[
              tw`text-secondary mb-4 max-w-[80%] text-[22px] leading-[33px]`,
              isCz && tw`text-white`,
            ]}
          >
            {t("veevDescription")}
          </Typography.Button>

          {hasCollapsible && (
            <TastePackCollapsible
              taste={taste}
              variant={isCz ? "light" : "dark"}
              title={t("discoverVeevFlavours")}
              product={"veev"}
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
              tw`flex items-center text-secondary space-x-4 pt-12`,
              isCz && tw`text-white`,
            ]}
          >
            <Assets.ChevronLeft
              className={isCz ? "stroke-white" : "stroke-secondary"}
            />
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
