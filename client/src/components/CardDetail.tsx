import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Test } from "../models/Test";
import { useTranslation } from "react-i18next";

const CardDetail: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const [test, setTest] = useState<Test | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/tests/${id}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setTest(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!test) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-detail">
      <button onClick={() => navigate(-1)}>Go back</button>
      {/* <h1>{test.title}</h1> */}
      <h1>{i18n.t(`titles.${test.title}`)}</h1>
      <p>{i18n.t(`descriptions.${test.description}`)}</p>
    </div>
  );
};

export default CardDetail;
