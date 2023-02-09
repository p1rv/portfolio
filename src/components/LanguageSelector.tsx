import React, { Fragment, useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";
import { Button } from "./Button";

export const LanguageSelector: React.FC = () => {
  const { language, languages, setLanguage } = useContext(LanguageContext);

  const renderedLanguageButtons = languages.map((lang, i) => (
    <Fragment key={lang}>
      {i !== 0 && " | "}
      <Button
        primary
        disabled={language === lang}
        className="!p-0 !m-0"
        onClick={() => setLanguage(lang)}
      >
        {lang}
      </Button>
    </Fragment>
  ));

  return <div className="absolute top-[0px] right-[1vw] z-10">{renderedLanguageButtons}</div>;
};
