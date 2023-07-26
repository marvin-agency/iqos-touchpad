import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { WelcomePage } from "../pages/welcome/WelcomePage";
import { QuizPage } from "../pages/quiz/QuizPage";
import { routes } from "./routes";
import { ResultPage } from "../pages/result/ResultPage";
import { LanguagePage } from "../pages/language/LanguagePage";
import { AgePickerPage } from "../pages/age-picker/AgePickerPage";

export const AppRouter = () => {
  const language = localStorage.getItem("lng");
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          language ? (
            <Navigate to={routes.AGE_PICKER} />
          ) : (
            <Navigate to={routes.LANGUAGE} />
          )
        }
      />
      <Route path={routes.LANGUAGE} element={<LanguagePage />} />
      <Route path={routes.AGE_PICKER} element={<AgePickerPage />} />
      <Route path={routes.WELCOME} element={<WelcomePage />} />
      <Route path={routes.QUIZ} element={<QuizPage />} />
      <Route path={routes.RESULTS} element={<ResultPage />} />
      <Route
        path={"/*"}
        element={
          language ? (
            <Navigate to={routes.AGE_PICKER} />
          ) : (
            <Navigate to={routes.LANGUAGE} />
          )
        }
      />
    </Routes>
  );
};
