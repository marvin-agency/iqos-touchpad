import { Assets } from "../../assets/assets";
import { Button } from "../../ui/buttons/Button";
import { Typography } from "../../ui/Typograhy";
import tw from "twin.macro";
import { Link, useNavigate } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import iqosIlumaCz from "../../assets/images/welcome-iluma-cz.png";
import iqosIlumaSk from "../../assets/images/welcome-iluma-sk.png";
import vapingVeevCz from "../../assets/images/welcome-veev-cz.png";
import vapingVeevSk from "../../assets/images/welcome-veew-sk.png";
import { motion as m } from "framer-motion";
import { SmokingWarning } from "../../ui/components/SmokingWarning";
import { routes } from "../../navigation/routes";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export const WelcomePage = () => {
  const { t } = useTranslation();
  const isCz = i18next.language === "cz";
  const welcomeIlumaImage = isCz ? iqosIlumaCz : iqosIlumaSk;
  const welcomeVeewImage = isCz ? vapingVeevCz : vapingVeevSk;

  return (
    <div className="flex h-screen max-h-screen flex-1 flex-col justify-between bg-secondary">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-1 flex-col"
      >
        <div className="flex flex-1">
          <div className="flex w-1/2 bg-turqoise-green">
            <img
              src={welcomeIlumaImage}
              alt={"iqosIluma"}
              className="-mb-20 h-auto w-full object-contain"
            />
          </div>
          <div className={`flex w-1/2 ${isCz ? "bg-darkest-blue" : "bg-blue"}`}>
            <img
              src={welcomeVeewImage}
              alt={"vapingVeev"}
              className={`z-10 -mb-5 h-auto w-full object-contain`}
            />
          </div>
        </div>
        <div className="relative z-20 flex flex-1 flex-col items-center justify-center text-start">
          <div className="flex h-full flex-col justify-between px-22 py-16">
            <div>
              <Typography.H1 containerCss={[tw`text-primary mb-20`]}>
                {t("findTheRightProduct")}
              </Typography.H1>
              <Link to={routes.QUIZ_ONE}>
                <Button.Contained variant={"light"} containerCss={[tw`mb-12`]}>
                  {t("chooseBetterCigaretteAlternative")}
                </Button.Contained>
              </Link>
              <Button.Outlined>{t("callIQOSPro")}</Button.Outlined>
            </div>
            <Link to={routes.LANGUAGE}>
              <div className="flex items-center space-x-4">
                <Assets.ChevronLeft className="text-white" />
                <Typography.Link containerCss={[tw`text-white`]}>
                  {t("returnToLanguageSelect")}
                </Typography.Link>
              </div>
            </Link>
          </div>
          <Assets.AsfAlternative className="absolute bottom-10 right-10" />
        </div>
      </m.div>
      <SmokingWarning />
    </div>
  );
};
