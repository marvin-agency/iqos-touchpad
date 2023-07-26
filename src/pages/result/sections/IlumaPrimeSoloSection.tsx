import { useTranslation } from "react-i18next";
import { Collapsible } from "../../../ui/Collapsible";
import { IlumaSection } from "./IlumaSection";
import { IlumaOneSection } from "./IlumaOneSection";
import { IlumaPrimeSection } from "./IlumaPrimeSection";
import { ITaste } from "../../../types";

export const IlumaPrimeSoloSection = ({ taste }: { taste: ITaste }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Collapsible
        className="bg-turqoise-green px-22 py-8"
        headerTitle={t("bestChoiceForYou")}
        openByDefault
      >
        <IlumaPrimeSection taste={taste} hasCollapsible={false} />
      </Collapsible>
      <Collapsible
        className="bg-turqoise-green px-22 pb-10"
        headerTitle={t("restOfTheProducts")}
        openByDefault
      >
        <IlumaSection taste={taste} hasCollapsible={false} />
        <IlumaOneSection taste={taste} hasGoToStart={true} />
      </Collapsible>
    </div>
  );
};
