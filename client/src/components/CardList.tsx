import { FC, useEffect, useState } from "react";
import { Test } from "../models/Test";
import Card from "./Card";

const CardList: FC = () => {
  const [tests, setTests] = useState<Test[]>([]);

  const fetchData = async () => {
    try {
      // const response = await fetch("/api/tests");
      const response = await fetch(
        "https://internationalization-api.onrender.com/api/tests"
      );

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
    <div className="card-list">
      {tests.map((test) => (
        <Card key={test.testId} test={test} />
      ))}
    </div>
  );
};

export default CardList;
