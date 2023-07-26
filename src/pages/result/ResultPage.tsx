import { motion as m } from "framer-motion";
import { SmokingWarning } from "../../ui/components/SmokingWarning";
import { IlumaPrimeSection } from "./sections/IlumaPrimeSection";
import { IlumaSection } from "./sections/IlumaSection";
import { IlumaOneSection } from "./sections/IlumaOneSection";
import { useLocation } from "react-router-dom";
import { LilSolidSection } from "./sections/LilSolidSection";
import { VeevSection } from "./sections/VeevSection";
import { VeebaSection } from "./sections/VeebaSection";
import React from "react";
import { IQOS_DEVICE } from "../../shared/utils";
import i18next from "i18next";
import { ResultHeader } from "../../ui/components/ResultHeader";
import { IlumaPrimeSoloSection } from "./sections/IlumaPrimeSoloSection";
import { Assets } from "../../assets/assets";

const resultComponents = {
  lilSolid: LilSolidSection,
  veev: VeevSection,
  veeba: VeebaSection,
  ilumaOne: IlumaOneSection,
  iluma: IlumaSection,
  ilumaPrime: IlumaPrimeSection,
};

export const ResultPage = () => {
  const location = useLocation();
  const result = location.state.result as IQOS_DEVICE[];
  const taste = location.state.taste as "tobacco" | "aromated" | "cooling";
  const firstResult = result?.[0];
  const isCz = i18next.language === "cz";
  const bgColor = ["ilumaPrime", "ilumaOne", "iluma"].includes(firstResult)
    ? "bg-turqoise-green"
    : firstResult === "lilSolid"
    ? "bg-blue-500"
    : firstResult === "veeba"
    ? isCz
      ? "bg-gradient-to-r bg-blue-gradient-from bg-blue-gradient-to"
      : "bg-dark-blue"
    : isCz
    ? "bg-darkest-blue"
    : "bg-blue";

  const isOnlyIlumaPrime =
    (result || []).length === 1 && firstResult === "ilumaPrime";

  return (
    <div
      className={`flex flex-1 flex-col ${bgColor} min-h-screen justify-between`}
    >
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative flex-1"
      >
        <ResultHeader result={result} />
        {isOnlyIlumaPrime ? (
          <IlumaPrimeSoloSection taste={taste} />
        ) : (
          (result || []).map((r, index, all) => {
            const Component = resultComponents[r];
            return (
              <Component
                taste={taste}
                hasGoToStart={index === all.length - 1}
              />
            );
          })
        )}
        {/*/!*{hasIluma && <Footer />}*!/*/}
        {/*<VeebaSection taste={"tobacco"} hasGoToStart />*/}
        {/*<VeebaSection taste={"cooling"} hasGoToStart />*/}
        {/*<VeebaSection taste={"aromated"} hasGoToStart />*/}
        {/*<VeevSection taste={"tobacco"} hasGoToStart />*/}
        {/*<VeevSection taste={"cooling"} hasGoToStart />*/}
        {/*<VeevSection taste={"aromated"} hasGoToStart />*/}
        {/*<IlumaSection taste={"tobacco"} hasGoToStart />*/}
        {/*<IlumaSection taste={"cooling"} hasGoToStart />*/}
        {/*<IlumaSection taste={"aromated"} hasGoToStart />*/}
        {/*<LilSolidSection taste={"cooling"} hasGoToStart />*/}
        {/*<LilSolidSection taste={"tobacco"} hasGoToStart />*/}
        {/*<LilSolidSection taste={"aromated"} hasGoToStart />*/}
        {/*<IlumaOneSection taste={"tobacco"} hasGoToStart />*/}
        {/*<IlumaOneSection taste={"cooling"} hasGoToStart />*/}
        {/*<IlumaOneSection taste={"aromated"} hasGoToStart />*/}
        {/*<IlumaPrimeSection taste={"tobacco"} hasGoToStart />*/}
        {/*<IlumaPrimeSection taste={"cooling"} hasGoToStart />*/}
        {/*<IlumaPrimeSection taste={"aromated"} hasGoToStart />*/}
        <Assets.AsfAlternative className="absolute bottom-6 right-10 scale-75" />
      </m.div>
      <SmokingWarning />
    </div>
  );
};
