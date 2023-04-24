import axios from "axios";
import React from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Brightness1 } from "@mui/icons-material";

export default function Search() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("Ru");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
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


  let a = Math.floor(Math.random()*20)
  // console.log(a);





  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && search != "") {
      Search();
    }
  });
  const [obj, setObj] = useState();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((ress) => {
        console.log(ress.data);
        setObj(ress.data.results[Number(a)].backdrop_path);
        console.log("salom");
      
        // console.log(ress.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    },[]);
    function Search() {
      navigate(`/qidir/${search}`);
    }
    // console.log(obj.results);
  return (
    <div
      className="container my-5 izla "
      style={{
        backgroundImage: `url(${
          process.env.REACT_APP_IMG_URL+obj
        })`,
         backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition : "center",
      }}
    >
      {
        <div className="colorbg">
          <div className="qidir">
          <h1 className="ms-4 ">{t("S2_dobro")}</h1>
          <h2 className="ms-4 ">{t("S2_pasti")}</h2>
          <div className="qidir2">
            <input
              type="text"
              tabIndex={1}
              autoCorrect="off"
              autoComplete="off"
              spellCheck="false"
              placeholder={t("N_search")}
              onInput={(val) => setSearch(val.target.value)}
            />
            <button onClick={Search}>{t("N_search")}</button>
          </div>
        </div>
        </div>
      }
    </div>
  );
}
