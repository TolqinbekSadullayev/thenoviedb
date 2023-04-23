import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import "./popular.css";
import { Link } from "react-router-dom";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { Pagination } from "antd";


export default function Example() {
  const [son, setSon] = useState(1);
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

  const linkStyle = {
    textDecoration: "none",
    color: 'black'
  };
  const [movie, setMovie] = useState([]);
  const [movie1, setMovie1] = useState([]);
  useEffect(() => {
    async function getData() {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_PERSON_URL}/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        )
        .then((ress) => {
          console.log(ress.data.results);
          ress.data.results.map((item, index) => {
            item.status = false;
          });
          setMovie(ress.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, []);

  return (
    <div className="container my-5">
      <div>
        <h3 className="pt-2">{t("People")}</h3>
      </div>
      <div className="row">
        {movie.length > 0 &&
          movie.map((item, index) => {
            return (
              <div className="col-3 my-3 col-sm-6 col-md-3 col-xs-6">
                <Link to={`/peoplelearn/${item.id}`} style={linkStyle}>
                  <div className="card">
                    <img
                      src={`${
                        process.env.REACT_APP_IMG_URL + item.profile_path
                      }`}
                      alt="moviepopular"
                    />
                    <h5
                      style={{ width: "100%" }}
                      className="text-truncate p-2 mt-4"
                    >
                      {item.name}
                    </h5>
                    <p
                      style={{ width: "100%" }}
                      className="text-truncate p-2 mt-4"
                    >
                      {t("sana")}
                      {` ${item.known_for.original_title}`}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
      <Pagination size="large" total={5000} />
    </div>
  );
}
