import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import "../popular.css";
import { Link } from "react-router-dom";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Example() {
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




  const [week, SetWeek]=useState("day")
  function Tugmaday(){
        SetWeek("day")
  }
  function Tugmaweek(week){
    SetWeek("week")
  }






  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [movie, setMovie] = useState([]);
  const [movie1, setMovie1] = useState([]);
  useEffect(() => {
    async function getData() {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_UMUMIY_URL}trending/all/${week}?api_key=${process.env.REACT_APP_API_KEY}`
        )
        .then((ress) => {
          // console.log(ress.data.results);
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
  });

  return (
    <div className="container my-5 ">
      <div className="p-3 ">
        <div className="d-flex my-2">
        <h2 className="ms-0 me-3">Trending</h2>
          <div className="d-flex  mt-2 my-2 alar">
            <div>
              <h5><a onClick={()=>Tugmaweek()} className="ahrf text-center ms-2" >Today</a></h5>
            <div className="background "></div>
            </div>
            <div><h5><a onClick={()=>Tugmaday()} className="ahrf text-center ms-3" >This week</a></h5></div>
          </div>
        </div>
      <Carousel responsive={responsive}>
      {movie.length > 0 &&
        movie.map((item, index) => {
          return (
              <div className="card trend me-3">
                <Link to={`/cardlearn/${item.id}`}><img
                  style={
                    !item.status
                      ? { filter: "blur(0px)" }
                      : { filter: "blur(5px)" }
                  }
                  src={`${process.env.REACT_APP_IMG_URL + item.poster_path}`}
                  alt="moviepopular"
                /></Link>
                <h5
                  style={{ width: "100%" }}
                  className="text-truncate p-2 mt-1"
                >
                  {item.name || item.title}
                </h5>
                <p
                  style={{ width: "100%" }}
                  className="text-truncate p-2 "
                >{t("sana")}{` ${item.release_date}`}</p>
                <Link to={`/cardlearn/${item.id}`}>
                  <button className="btn btn-success lern">
                    {t("Learnmore")}
                  </button>
                </Link>
                <div
                  className="dot_list"
                  onClick={() => setMovie1((item.status = !item.status))}
                >
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                {item.status && (
                  <div className="watch_list">
                    <p>
                      <BsFillBookmarkFill /> Watch list
                    </p>
                    <p>
                      <AiFillHeart /> Favorite list
                    </p>
                  </div>
                )}
              </div>
          );
        })}
        </Carousel>
      </div>
    </div>
  );
}
