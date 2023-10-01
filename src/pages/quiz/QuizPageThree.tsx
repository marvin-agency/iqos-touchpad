import tw from "twin.macro";
import { Typography } from "../../ui/Typograhy";
import TobaccoLeafs from "../../assets/images/Taste_tobacco.png";
import CoolWaves from "../../assets/images/Taste_fresh&cooling.png";
import Aromatic from "../../assets/images/Taste_aromatic&friut.png";
import { ImageWText } from "../../ui/components/ImageWText";
import { IQuizPage3 } from "./types";
import { motion as m } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "../../ui/buttons/Button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { routes } from "../../navigation/routes";
import { calculateResult } from "../../shared/utils";
import { Assets } from "../../assets/assets";
import { SmokingWarning } from "../../ui/components/SmokingWarning";

export const QuizPageThree = ({
  selectedAnswer,
  handleImagePress,
}: IQuizPage3) => {
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
              width: `${(3 / 3) * 100}%`,
              transitionDuration: "500ms",
            }}
          />
        </div>
        <div className="flex items-center px-default-x-padding py-12">
          <Typography.BodyMedium containerCss={[tw`text-[34px]`]}>
            {t("question")} {3}/3
          </Typography.BodyMedium>
        </div>
        <div className="flex flex-1 flex-col items-center self-center px-default-x-padding transition-all">
          <div className="mb-20">
            <m.div
              key={"QuizPageThree"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mt-36 flex flex-col items-center px-14"
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
          </div>

          <div className="my-4 flex w-full justify-between p-1">
            <Link to={routes.QUIZ_TWO}>
              <Button.Outlined containerCss={[tw`px-14`]} lead={FiChevronLeft}>
                {t("back")}
              </Button.Outlined>
            </Link>
            <Link to={routes.RESULTS}>
              <Button.Contained
                trail={FiChevronRight}
                containerCss={[tw`px-14`]}
              >
                {t("end")}
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
