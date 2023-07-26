import tw from "twin.macro";
import { Typography } from "../../ui/Typograhy";
import Cigarete from "../../assets/images/Products_cigarettes.png";
import Vaping from "../../assets/images/Products_vapes(E-Liquid).png";
import Tobacco from "../../assets/images/Products_heated_tobacco.png";
import TobaccoNoHeats from "../../assets/images/Heated-tobacco-no-heets.png";
import Other from "../../assets/images/Products_other.png";
import { ImageWText } from "../../ui/components/ImageWText";
import { IQuizPage } from "./types";
import { motion as m } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export const QuizPageTwo = ({
  selectedAnswers,
  handleImagePress,
}: IQuizPage) => {
  const { t } = useTranslation();
  const isCz = i18next.language === "cz";

  return (
    <m.div
      key={"QuizPageTwo"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-1 flex-col items-center px-14 mt-36"
    >
      <div className="flex flex-col items-center">
        <Typography.H2 containerCss={[tw`text-primary text-center`]}>
          {t("currentlyUsedProducts")}
        </Typography.H2>
        <Typography.BodyLarge
          containerCss={[tw`my-8 mb-12 text-primary text-center`]}
        >
          {t("multipleOptions")}
        </Typography.BodyLarge>
      </div>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
        <ImageWText
          image={Cigarete}
          text={t("cigarettes") as string}
          id={7}
          imageWidthPercentage={40}
          isSelected={(selectedAnswers || []).includes(6)}
          onPress={() => handleImagePress(6)}
        />
        <ImageWText
          image={Vaping}
          text={t("electronicCigarettes") + "\n" + t("containsELiquid")}
          id={8}
          imageWidthPercentage={40}
          isSelected={(selectedAnswers || []).includes(7)}
          onPress={() => handleImagePress(7)}
        />
        <ImageWText
          image={isCz ? TobaccoNoHeats : Tobacco}
          text={t("heatedTobacco") as string}
          id={9}
          imageWidthPercentage={40}
          isSelected={(selectedAnswers || []).includes(8)}
          onPress={() => handleImagePress(8)}
        />
        <ImageWText
          image={Other}
          text={t("rest") as string}
          id={10}
          imageWidthPercentage={40}
          isSelected={(selectedAnswers || []).includes(9)}
          onPress={() => handleImagePress(9)}
        />
      </div>
    </m.div>
  );
};
