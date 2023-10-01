import { motion as m } from "framer-motion";
import { ReactComponent as IqosLogo } from "../../assets/icons/iqos-logo.svg";
import Dropdown, { Group, Option } from "react-dropdown";
import { useTranslation } from "react-i18next";
import { Typography } from "../../ui/Typograhy";
import tw from "twin.macro";
import { Button } from "../../ui/buttons/Button";
import "./AgePickerPage.css";
import { useState } from "react";
import { calculateAge } from "../../shared/utils";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../navigation/routes";

export const AgePickerPage = () => {
  const [selectedMonth, setSelectedMonth] = useState<Option | undefined>(
    undefined
  );
  const [selectedYear, setSelectedYear] = useState<Option | undefined>(
    undefined
  );
  const [isUnderage, setIsUnderage] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const options = [
    { value: "1", label: t("months.january") },
    { value: 2, label: t("months.february") },
    { value: 3, label: t("months.march") },
    { value: 4, label: t("months.april") },
    { value: 5, label: t("months.may") },
    { value: 6, label: t("months.june") },
    { value: 7, label: t("months.july") },
    { value: 8, label: t("months.august") },
    { value: 9, label: t("months.september") },
    { value: 10, label: t("months.october") },
    { value: 11, label: t("months.november") },
    { value: 12, label: t("months.december") },
  ] as (Group | Option | string)[];

  const currentYear = new Date().getFullYear();
  const years = new Array(100)
    .fill(currentYear)
    .map((year, i) => (year - i).toString());

  const handleConfirm = () => {
    if (selectedMonth?.value && selectedYear?.value) {
      const age = calculateAge(
        `${selectedMonth?.value}/${selectedYear?.value}`
      );
      if (age > 18) {
        sessionStorage.setItem("approved", "true");
        navigate(routes.WELCOME);
      } else {
        setIsUnderage(true);
      }
    }
  };

  return (
    <div className="flex h-screen max-h-screen flex-1 flex-col justify-between">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex h-full flex-1 flex-col items-center justify-between bg-age-page bg-cover py-16"
      >
        <IqosLogo />
        {!isUnderage ? (
          <Typography.BodyMedium
            containerCss={[tw`text-secondary font-bold text-center px-24`]}
          >
            {t("agePage.confirmYouAreOver18")}
          </Typography.BodyMedium>
        ) : (
          <Typography.BodyXLarge
            containerCss={[tw`text-secondary font-bold text-center px-20`]}
          >
            {t("agePage.arent18YearsOld")}
          </Typography.BodyXLarge>
        )}
        {!isUnderage && (
          <div>
            <div className="mb-10 flex space-x-20">
              <div>
                <Typography.BodyMedium
                  containerCss={[tw`mb-2 text-secondary text-[32px]`]}
                >
                  {t("agePage.month")}
                </Typography.BodyMedium>
                <Dropdown
                  options={options}
                  value={selectedMonth}
                  //@ts-ignore
                  arrowOpen={<span className={"arrow-open"} />}
                  arrowClosed={<span className={"arrow-close"} />}
                  onChange={(value) => setSelectedMonth(value)}
                  placeholder={t("agePage.choose") as string}
                />
              </div>
              <div>
                <Typography.BodyMedium
                  containerCss={[tw`mb-2 text-secondary text-[32px]`]}
                >
                  {t("agePage.year")}
                </Typography.BodyMedium>
                <Dropdown
                  options={years}
                  value={selectedYear}
                  arrowOpen={<span className={"arrow-open"} />}
                  arrowClosed={<span className={"arrow-close"} />}
                  //@ts-ignore
                  onChange={(value) => setSelectedYear(value)}
                  placeholder={t("agePage.choose") as string}
                />
              </div>
            </div>
            <Link to={routes.WELCOME}>
              <Button.Contained
                variant={"dark"}
                containerCss={[tw`w-full`]}
                onClick={handleConfirm}
              >
                {t("agePage.confirm")}
              </Button.Contained>
            </Link>
          </div>
        )}
        <div className={"flex flex-col items-center px-10 text-center"}>
          <Typography.BodyMedium
            containerCss={[tw`text-secondary font-bold mb-8`]}
          >
            {t("agePage.weCare")}
          </Typography.BodyMedium>
          <Typography.BodySmall
            containerCss={[tw`text-secondary text-center max-w-[1280px]`]}
          >
            {t("agePage.arent18YearsOldDesc")}
          </Typography.BodySmall>
        </div>
      </m.div>
    </div>
  );
};
