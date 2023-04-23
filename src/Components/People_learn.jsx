import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Image } from "antd";
import { useTranslation } from "react-i18next";
export default function CardLearn() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("Ru");
  const changeLanguage = (til) => {
    if (til === "Ru") {
      setLang("Ru");
    }
    if (til === "En") {
      setLang("En");
    }
    if (til === "Uz") {
      setLang("Uz");
    }
    i18n.changeLanguage(til);
  };

  const [obj, setObj] = useState({});
  const id = useParams();
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_PERSON_URL}/${id.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((ress) => {
        setObj(ress.data);
        console.log(ress.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [obj1, setObj1] = useState({});
  const id1 = useParams();
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_PERSON_URL}/${id1.id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((ress) => {
        setObj1(ress.data);
        console.log(ress.data +"men keldim");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  return (
    <div>
      {obj && (
        <div className="shadow mt-5 plern">
          <div className="container  lern">
            <div className="d-flex justify-content-between">
              <div>
                <img className="people_img"
                  src={`${process.env.REACT_APP_IMG_URL + obj.profile_path}`}
                  alt="learn"
                />
              </div>
              <div className="ms-5 mt-5">
                <h2>{`${obj.name}`}</h2>
                <h4>{t("Biography")}</h4>
                <h6>{t("ofbirth")}{`${obj.place_of_birth}`} {`(${obj.birthday})`}</h6>
                <h5>{` ${obj.biography}`}</h5>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
