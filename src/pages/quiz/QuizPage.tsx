import { Typography } from "../../ui/Typograhy";
import { Assets } from "../../assets/assets";
import { useState } from "react";
import { Button } from "../../ui/buttons/Button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { QuizPageOne } from "./QuizPageOne";
import { Link, useNavigate } from "react-router-dom";
import { QuizPageTwo } from "./QuizPageTwo";
import { QuizPageThree } from "./QuizPageThree";
import { AnimatePresence, motion as m } from "framer-motion";
import { SmokingWarning } from "../../ui/components/SmokingWarning";
import { routes } from "../../navigation/routes";
import { calculateResult } from "../../shared/utils";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";

export const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [Q1Answers, setQ1Answers] = useState<number[]>([]);
  const [Q2Answers, setQ2Answers] = useState<number[]>([]);
  const [Q3Answer, setQ3Answer] = useState<string>("");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handlePressQ1 = (id) => {
    if ((Q1Answers || []).includes(id)) {
      setQ1Answers((Q1Answers || []).filter((ans) => ans !== id));
    } else {
      if (Q1Answers.length < 2) {
        setQ1Answers([...Q1Answers, id]);
      }
    }
  };

  const handlePressQ2 = (id) => {
    if ((Q2Answers || []).includes(id)) {
      setQ2Answers((Q2Answers || []).filter((ans) => ans !== id));
    } else {
      setQ2Answers([...Q2Answers, id]);
    }
  };

  const handlePressQ3 = (id) => {
    if (Q3Answer === id) {
      setQ3Answer("");
    } else {
      setQ3Answer(id);
    }
  };

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
              width: `${(currentQuestion / 3) * 100}%`,
              transitionDuration: "500ms",
            }}
          />
        </div>
        <div className="flex items-center px-default-x-padding py-12">
          <Typography.BodyMedium containerCss={[tw`text-[34px]`]}>
            {t("question")} {currentQuestion}/3
          </Typography.BodyMedium>
        </div>
        <div className="flex flex-1 flex-col items-center self-center px-default-x-padding transition-all">
          <div className="mb-20">
            {/*<AnimatePresence>*/}
            {/*  {currentQuestion === 1 && (*/}
            <QuizPageOne
              selectedAnswers={Q1Answers}
              handleImagePress={handlePressQ1}
            />
            {/*)}*/}
            {/*{currentQuestion === 2 && (*/}
            <QuizPageTwo
              selectedAnswers={Q2Answers}
              handleImagePress={handlePressQ2}
            />
            {/*)}*/}
            {/*{currentQuestion === 3 && (*/}
            <QuizPageThree
              selectedAnswer={Q3Answer}
              handleImagePress={handlePressQ3}
            />
            {/*)}*/}
            {/*</AnimatePresence>*/}
          </div>

          <div className="my-4 flex w-full justify-between p-1">
            <Button.Outlined
              containerCss={[tw`px-14`]}
              onClick={() => {
                if (currentQuestion === 1) {
                  navigate(-1);
                } else {
                  setCurrentQuestion((prevNumber) => prevNumber - 1);
                }
              }}
              lead={FiChevronLeft}
            >
              {t("back")}
            </Button.Outlined>
            <Link to={routes.RESULTS}>
              <Button.Contained
                onClick={() => {
                  if (currentQuestion === 3 && Q3Answer.length > 0) {
                    const result = calculateResult({
                      Q1Answers,
                      Q2Answers,
                    });
                    const taste = Q3Answer;
                    if (result?.[0] !== "other") {
                      navigate(routes.RESULTS, { state: { result, taste } });
                    } else {
                      navigate("https://iqos.com");
                    }
                  } else {
                    if (
                      (currentQuestion === 1 && Q1Answers.length === 2) ||
                      (currentQuestion === 2 && Q2Answers.length > 0) ||
                      (currentQuestion === 3 && Q3Answer.length > 0)
                    ) {
                      setCurrentQuestion((prevNumber) => prevNumber + 1);
                    }
                  }
                }}
                trail={FiChevronRight}
                containerCss={[tw`px-14`]}
              >
                {currentQuestion === 3 ? t("end") : t("nextQuestion")}
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
