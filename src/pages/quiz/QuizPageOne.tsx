import tw from "twin.macro";
import { Typography } from "../../ui/Typograhy";
import RidingBikes from "../../assets/images/Pic_sunsite_bikes.png";
import ManInSuite from "../../assets/images/Pic_man_in_suite.png";
import Wallet from "../../assets/images/Pic_wallet.png";
import Fruit from "../../assets/images/Pic_fruit_basket.png";
import Leaf from "../../assets/images/Pic_leaf.png";
import { ImageWText } from "../../ui/components/ImageWText";
import { IQuizPage } from "./types";
import { motion as m } from "framer-motion";
import { useTranslation } from "react-i18next";

export const QuizPageOne = ({
  selectedAnswers = [],
  handleImagePress,
}: IQuizPage) => {
  const { t } = useTranslation();
  return (
    <m.div
      key={"QuizPageOne"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-1 flex-col items-center"
    >
      <div className="flex flex-col items-center">
        <Typography.H2 containerCss={[tw`text-primary text-center px-10`]}>
          {t("chooseTwoPossibilities")}
        </Typography.H2>
        <Typography.BodyLarge containerCss={[tw`my-6 text-primary`]}>
          {t("want")}:
        </Typography.BodyLarge>
      </div>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
        <ImageWText
          text={t("easySimple") as string}
          image={RidingBikes}
          id={1}
          isSelected={(selectedAnswers || []).includes(1)}
          onPress={() => handleImagePress(1)}
        />
        <ImageWText
          text={t("topQuality") as string}
          image={ManInSuite}
          id={2}
          isSelected={(selectedAnswers || []).includes(2)}
          onPress={() => handleImagePress(2)}
        />
        <ImageWText
          text={t("lowPriceFunctionality") as string}
          image={Wallet}
          id={3}
          isSelected={(selectedAnswers || []).includes(3)}
          onPress={() => handleImagePress(3)}
        />
        <ImageWText
          text={t("chooseBetweenDifferentTastes") as string}
          image={Fruit}
          id={4}
          isSelected={(selectedAnswers || []).includes(4)}
          onPress={() => handleImagePress(4)}
        />
        <ImageWText
          text={t("authenticTobaccoTaste") as string}
          image={Leaf}
          id={5}
          isSelected={(selectedAnswers || []).includes(5)}
          onPress={() => handleImagePress(5)}
        />
        <div className="w-[290px] min-w-[256px]" />
      </div>
    </m.div>
  );
};
