import NameRectangle from "../../../assets/images/longer-name-rectangle.png";
import { Typography } from "../../../ui/Typograhy";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { Button } from "../../../ui/buttons/Button";
import LilSolid from "../../../assets/images/Heated_device_Iqos_Lil_Solid.png";
import { useTranslation } from "react-i18next";
import { routes } from "../../../navigation/routes";
import { ISection } from "../../../types";
import { TastePackCollapsible } from "../collapsibles/TastePackCollapsible";
import { Assets } from "../../../assets/assets";

export const LilSolidSection = ({
  hasCollapsible = true,
  hasGoToStart = false,
  taste,
}: ISection) => {
  const { t } = useTranslation();

  return (
    <div className={`overflow-hidden  bg-blue-500 pt-10`}>
      <div className="flex">
        <div className="relative mt-24 flex flex-1 items-start justify-center">
          <img
            src={LilSolid}
            alt={"LilSolid"}
            className="w-1/2 object-contain object-top"
          />
        </div>
        <div className="z-50 mt-20 flex flex-1 flex-col items-start gap-5">
          <img src={NameRectangle} alt={"name-rectangle"} />
          <Typography.BodyMedium
            containerCss={[
              tw`ml-4 -mt-[50px] uppercase font-700 text-[20px] leading-[28px]`,
            ]}
          >
            {t("heatedTobacco")}
          </Typography.BodyMedium>
          <Typography.H2>lil solid</Typography.H2>
          <Typography.Button
            containerCss={[tw`mb-4 max-w-[80%] text-[22px] leading-[33px]`]}
          >
            {t("lilSolidDescription")}
          </Typography.Button>

          {hasCollapsible && (
            <TastePackCollapsible
              taste={taste}
              title={t("discoverFiitFlavours")}
              product={"fiit"}
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
            containerCss={[tw`flex items-center text-white space-x-4 pt-12`]}
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
