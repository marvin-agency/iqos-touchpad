import tw from "twin.macro";
import { Typography } from "../../ui/Typograhy";
import TobaccoLeafs from "../../assets/images/Taste_tobacco.png";
import CoolWaves from "../../assets/images/Taste_fresh&cooling.png";
import Aromatic from "../../assets/images/Taste_aromatic&friut.png";
import { ImageWText } from "../../ui/components/ImageWText";
import { IQuizPage3 } from "./types";
import { motion as m } from "framer-motion";
import { useTranslation } from "react-i18next";

export const QuizPageThree = ({
  selectedAnswer,
  handleImagePress,
}: IQuizPage3) => {
  const { t } = useTranslation();
  return (
    <m.div
      key={"QuizPageThree"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center px-14 mt-36"
    >
      <div className="flex flex-col items-center">
        <Typography.H2
          containerCss={[tw`text-primary text-center mb-16`]}
        >
          {t("whatTastesDoYouLike")}
        </Typography.H2>
      </div>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
        <ImageWText
          text={t("tobaccoFlavour") as string}
          image={TobaccoLeafs}
          id={11}
          imageWidthPercentage={40}
          isSelected={selectedAnswer === "tobacco"}
          onPress={() => handleImagePress("tobacco")}
        />
        <ImageWText
          text={t("freshFlavour") as string}
          image={CoolWaves}
          id={12}
          imageWidthPercentage={40}
          isSelected={selectedAnswer === "cooling"}
          onPress={() => handleImagePress("cooling")}
        />
        <ImageWText
          text={t("fruitFlavor") as string}
          image={Aromatic}
          id={13}
          imageWidthPercentage={40}
          isSelected={selectedAnswer === "aromated"}
          onPress={() => handleImagePress("aromated")}
        />
        <div className="w-[290px]" />
      </div>
    </m.div>
  );
};
