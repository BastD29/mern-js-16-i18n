import { ChangeEvent, FC } from "react";
import { useTranslation } from "react-i18next";

const Translation: FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <select onChange={handleLanguageChange} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </>
  );
};

export default Translation;
