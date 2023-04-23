import React, {useEffect, useState} from 'react'
import { useParams,  } from 'react-router-dom'
import axios from 'axios';
import { t } from 'i18next'
import { useTranslation } from "react-i18next";
export default function Qidir() {
    const qidiruv = useParams()
    const [massiv , setMassiv] =useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SEARCH_URL}?api_key=${process.env.REACT_APP_API_KEY}&query=${qidiruv.soz}`)
          .then(ress => {
            console.log(ress.data.results);
            setMassiv(ress.data.results)
          })
          .catch(err => {
            console.log(err);
          })
      }, [qidiruv.soz])
    
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
  return (
    <div className='container my-5'>
        {
                (massiv.length > 0) ? massiv.map((item, index)=>{
                    return(
                        <div className="row d-flex align-items-center my-3 shadow">
                            <div className="col-2">
                            <img className='img_search rounded-start' style={{width: '100%' , height:'350', objectFit:'cover'}} src={(item.poster_path)? `${process.env.REACT_APP_IMG_URL + item.poster_path}` : "https://sun6-21.userapi.com/s/v1/ig2/WQo3ZaP0xNQxBPqcpEq_eSkiKblznoWTr3l0PznJ5SDIZZxXHuI7LVwHqNnAeQWohZTDaNCvx7Xqvvr5KHTmuqdv.jpg?size=400x0&quality=96&crop=143,23,433,433&ava=1"} alt="Search result" />
                        </div>
                        <div className="col-10">
                            <h2>{t("film_name")}{`${item.original_title}(${item.release_date})`}</h2>
                            <h6>{t("overview")}</h6>
                            <p>{item.overview}</p>
                        </div>
                        </div>
                        
                    )
                })
                :
                <img style={{width:'100%', height:'100%'}} src={"https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif"} alt="gif" />
                
            }
    </div>
  )
}
