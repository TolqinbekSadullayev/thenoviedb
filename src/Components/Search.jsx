import axios from "axios";
import React from "react";
import { useTranslation } from "react-i18next";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("Ru");
 const [search, setSearch] = useState('');
 const navigate = useNavigate()
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
   
  document.addEventListener("keydown", function(event) {
    if(event.key === "Enter" && search != ''){
      Search()
    }
  })
  const [obj, setObj] = useState({});
  
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((ress) => {
        setObj(ress.data);
        console.log(ress.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function Search(){
    navigate(`/qidir/${search}`)
  }
  return (
    <div className="container my-5 izla "
    style={{
      backgroundImage: `url(${process.env.REACT_APP_IMG_URL +obj.backdrop_path})`
     }}
    >
      {
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
              onInput={(val)=> setSearch(val.target.value)}
            />
            <button onClick={Search}>{t("N_search")}</button>
          </div>
          
          
        </div>
      }
    </div>
  );
}
