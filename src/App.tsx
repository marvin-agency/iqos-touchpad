import React from "react";
import { AppRouter } from "./navigation/AppRouter";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./language";
import "react-dropdown/style.css";

i18n
  .use(initReactI18next) //  passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    lng: "sk", // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

function App() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false}>
      <AppRouter key={location.pathname} />
    </AnimatePresence>
  );
}

export default App;
