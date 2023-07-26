import NameRectangle from "../../../assets/images/longer-name-rectangle.png";
import { Typography } from "../../../ui/Typograhy";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { Button } from "../../../ui/buttons/Button";
import IlumaOne from "../../../assets/images/Heated_device_Iqos_Iluma_One.png";
import { TastePackCollapsible } from "../collapsibles/TastePackCollapsible";
import { useTranslation } from "react-i18next";
import { ISection } from "../../../types";
import { routes } from "../../../navigation/routes";
import { Assets } from "../../../assets/assets";

export const IlumaOneSection = ({
  hasCollapsible = true,
  hasGoToStart = false,
  taste,
}: ISection) => {
  const { t } = useTranslation();
  return (
    <div className={`overflow-hidden bg-turqoise-green pt-10`}>
      <div className="flex bg-turqoise-green pt-10">
        <div className="relative flex flex-1">
          <img
            src={IlumaOne}
            alt={"IlumaOne"}
            className="object-contain object-top"
          />
        </div>
        <div className=" flex flex-1 flex-col items-start gap-5">
          <img src={NameRectangle} alt={"name-rectangle"} />
          <Typography.BodyMedium
            containerCss={[
              tw`ml-4 -mt-[50px] uppercase font-700 text-[20px] leading-[28px]`,
            ]}
          >
            {t("heatedTobacco")}
          </Typography.BodyMedium>
          <Typography.H2>IQOS ILUMA ONE</Typography.H2>
          <Typography.Button
            containerCss={[tw`text-secondary mb-4 max-w-[70%]`]}
          >
            {t("iqosIlumaOneDescription")}
          </Typography.Button>

          {hasCollapsible && (
            <TastePackCollapsible
              product={"terea"}
              title={t("discoverTereaFlavours")}
              taste={taste}
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
            ]}
          >
            <Assets.ChevronLeft className="stroke-secondary" />
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
