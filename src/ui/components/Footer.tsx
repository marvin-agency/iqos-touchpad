import { Typography } from "../Typograhy";
import tw from "twin.macro";
import { Button } from "../buttons/Button";
import { HiChevronLeft } from "react-icons/hi";
import { routes } from "../../navigation/routes";
import { Assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center bg-secondary">
      <Typography.H2 containerCss={[tw`mt-20 mb-14`]}>
        {t("wantToFindRightTaste")}
      </Typography.H2>
      <Button.Contained containerCss={[tw`mb-6`]}>
        {t("tryFlavourAdviser")}
      </Button.Contained>
      <Typography.H4 containerCss={[tw`mb-6 font-400`]}>
        {t("or")}
      </Typography.H4>
      <div className="flex items-center">
        <HiChevronLeft className="text-white" />
        <Typography.Link
          containerCss={[tw`text-white`]}
          onClick={() => navigate(routes.WELCOME)}
        >
          {t("returnToProductAdvisor")}
        </Typography.Link>
      </div>
      <div className="flex w-full items-center justify-end pb-10 pr-10">
        <Assets.AsfAlternative />
      </div>
    </div>
  );
};
