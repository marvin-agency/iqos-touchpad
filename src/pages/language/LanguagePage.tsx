import { useNavigate } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { motion as m } from "framer-motion";
import CustomOverlay from "../../assets/images/custom-overlay.png";
import { Button } from "../../ui/buttons/Button";
import i18n from "i18next";
import { Assets } from "../../assets/assets";
import { routes } from "../../navigation/routes";
import tw from "twin.macro";

export const LanguagePage = () => {
  const navigate = useNavigate();
  const hasCheckedAge = sessionStorage.getItem("approved");

  return (
    <div className="flex h-screen max-h-screen flex-1 flex-col justify-between bg-turqoise">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex h-full flex-1 items-center justify-center"
      >
        <img
          src={CustomOverlay}
          alt={"overlay"}
          className={`absolute right-0 flex h-full w-auto object-cover object-right`}
        />
        <div className="z-10 space-y-12">
          <Button.Contained
            variant={"invert"}
            containerCss={[tw`w-full px-22`]}
            onClick={async () => {
              await i18n.changeLanguage("cz");
              localStorage.setItem("lng", "cz");
              navigate(hasCheckedAge ? routes.WELCOME : routes.AGE_PICKER);
            }}
          >
            Čeština
          </Button.Contained>
          <Button.Contained
            variant={"invert"}
            containerCss={[tw`w-full px-22`]}
            onClick={async () => {
              await i18n.changeLanguage("sk");
              localStorage.setItem("lng", "sk");
              navigate(hasCheckedAge ? routes.WELCOME : routes.AGE_PICKER);
            }}
          >
            Slovenčina
          </Button.Contained>
        </div>
      </m.div>
      <Assets.AsfAlternative className="xl:(bottom-12 right-12) absolute bottom-7 right-7" />
    </div>
  );
};
