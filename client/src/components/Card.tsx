import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Test } from "../models/Test";
import { Link } from "react-router-dom";

type CardProps = {
  test: Test;
};

const Card: FC<CardProps> = ({ test }) => {
  const { i18n } = useTranslation();

  return (
    // <div key={test.testId} className="card">
    //   <h1>{i18n.t(`titles.${test.title}`)}</h1>
    //   <h1>{i18n.t(`descriptions.${test.description}`)}</h1>
    // </div>

    <div key={test.testId} className="card">
      <Link to={`/${test._id}`}>
        <h1>{i18n.t(`titles.${test.title}`)}</h1>
      </Link>
    </div>
  );
};

export default Card;
