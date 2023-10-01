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
import { Button } from "../../ui/buttons/Button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { routes } from "../../navigation/routes";
import { calculateResult } from "../../shared/utils";
import { Assets } from "../../assets/assets";
import { SmokingWarning } from "../../ui/components/SmokingWarning";

export const QuizPageOne = ({
  selectedAnswers = [],
  handleImagePress,
}: IQuizPage) => {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-between bg-secondary">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative flex flex-1 flex-col items-start bg-secondary"
      >
        <div className="flex w-full bg-white transition-all">
          <div
            className={`h-8 bg-primary transition-all`}
            style={{
              width: `${(1 / 3) * 100}%`,
              transitionDuration: "500ms",
            }}
          />
        </div>
        <div className="flex items-center px-default-x-padding py-12">
          <Typography.BodyMedium containerCss={[tw`text-[34px]`]}>
            {t("question")} {1}/3
          </Typography.BodyMedium>
        </div>
        <div className="flex flex-1 flex-col items-center self-center px-default-x-padding transition-all">
          <div className="mb-20">
            <m.div
              key={"QuizPageOne"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-1 flex-col items-center"
            >
              <div className="flex flex-col items-center">
                <Typography.H2
                  containerCss={[tw`text-primary text-center px-10`]}
                >
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
          </div>

          <div className="my-4 flex w-full justify-between p-1">
            <Link to={routes.WELCOME}>
              <Button.Outlined containerCss={[tw`px-14`]} lead={FiChevronLeft}>
                {t("back")}
              </Button.Outlined>
            </Link>

            <Link to={routes.QUIZ_TWO}>
              <Button.Contained
                trail={FiChevronRight}
                containerCss={[tw`px-14`]}
              >
                {t("nextQuestion")}
              </Button.Contained>
            </Link>
          </div>
        </div>
        <Assets.AsfAlternative className="absolute bottom-14 right-16" />
      </m.div>
      <SmokingWarning />
    </div>
  );
};
