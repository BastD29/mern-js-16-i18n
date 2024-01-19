import { FC, useEffect, useState } from "react";
import { Test } from "../models/Test";
import { useTranslation } from "react-i18next";

const Data: FC = () => {
  const { i18n } = useTranslation();

  const [tests, setTests] = useState<Test[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/tests");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setTests(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {tests.map((test) => (
        <div key={test.testId}>
          <h1>{i18n.t(`titles.${test.title}`)}</h1>
          <h1>{i18n.t(`descriptions.${test.description}`)}</h1>
        </div>
      ))}
    </>
  );
};

export default Data;
