import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { WelcomePage } from "../pages/welcome/WelcomePage";
import { QuizPage } from "../pages/quiz/QuizPage";
import { routes } from "./routes";
import { ResultPage } from "../pages/result/ResultPage";
import { LanguagePage } from "../pages/language/LanguagePage";
import { AgePickerPage } from "../pages/age-picker/AgePickerPage";
import { QuizPageOne } from "../pages/quiz/QuizPageOne";
import { QuizPageTwo } from "../pages/quiz/QuizPageTwo";
import { QuizPageThree } from "../pages/quiz/QuizPageThree";

export const AppRouter = () => {
  const language = localStorage.getItem("lng");
  const [Q1Answers, setQ1Answers] = useState<number[]>([]);
  const [Q2Answers, setQ2Answers] = useState<number[]>([]);
  const [Q3Answer, setQ3Answer] = useState<string>("");

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
    <Routes>
      <Route
        path={"/"}
        element={<ResultPage A1={Q1Answers} A2={Q2Answers} A3={Q3Answer} />}
      />
      <Route path={routes.LANGUAGE} element={<LanguagePage />} />
      <Route path={routes.AGE_PICKER} element={<AgePickerPage />} />
      <Route path={routes.WELCOME} element={<WelcomePage />} />
      <Route
        path={routes.QUIZ_ONE}
        element={
          <QuizPageOne
            selectedAnswers={Q1Answers}
            handleImagePress={handlePressQ1}
          />
        }
      />
      <Route
        path={routes.QUIZ_TWO}
        element={
          <QuizPageTwo
            selectedAnswers={Q2Answers}
            handleImagePress={handlePressQ2}
          />
        }
      />
      <Route
        path={routes.QUIZ_THREE}
        element={
          <QuizPageThree
            selectedAnswer={Q3Answer}
            handleImagePress={handlePressQ3}
          />
        }
      />
      <Route
        path={routes.RESULTS}
        element={<ResultPage A1={Q1Answers} A2={Q2Answers} A3={Q3Answer} />}
      />
    </Routes>
  );
};
