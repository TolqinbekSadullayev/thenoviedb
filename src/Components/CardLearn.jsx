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
        `${process.env.REACT_APP_BASE_URL}/${id.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((ress) => {
        setObj(ress.data);
        console.log(ress.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  return (
    <div>
      {obj && (
        <div
          className="learn_div my-5"
          style={{
            backgroundImage: `url(${
              process.env.REACT_APP_IMG_URL + obj.backdrop_path
            }?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_100%,w_100%)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition : "center",
            backgroundColor : 'rgba(0, 0, 0, 0.5)',
            preview :  `${process.env.REACT_APP_IMG_URL + obj.backdrop_path}`
    
   
        }}
        >
          <div className="colorbg">
          <div className="container  lern">
            <div className="d-flex justify-content-between row">
              <div className="col-3 col-md-2 col-sm-12">
                <img
                  src={`${process.env.REACT_APP_IMG_URL + obj.poster_path}`}
                  alt="learn"
                />
              </div>
              <div className="ms-5 mt-5 col-8 col-md-8 col-sm-12">
                <h2>{t("film_name")}{`${obj.title || obj.name}(${obj.release_date})`}</h2>
                <h6>{t("sana")}{` ${obj.release_date}`}</h6>
                <h4>{t("overview")}</h4>
                <h5>{` ${obj.overview}`}</h5>
              </div>
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
