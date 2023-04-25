import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import "./popular.css"
import { Link } from 'react-router-dom'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

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
    const dispatch= useDispatch()
    const [movie, setMovie] =useState([])
    const [movie1, setMovie1] =useState([])
    useEffect(()=> {
        async function getData(){
            await axios.get(`${process.env.REACT_APP_BASE_URL}/popular?api_key=${process.env.REACT_APP_API_KEY}&language=${t("Tili")}&page=1`)
            .then(ress => {
                console.log(ress.data.results);
                ress.data.results.map((item, index)=> {
                    item.status= false
                })
                setMovie(ress.data.results)
            })
            .catch(err => {
                console.log(err);
            })
        }
        getData()
    },[]) 
    
    function Addmovie_watch(item, index){
      let yangi_massiv =[...movie]
      yangi_massiv[index].status=false
      yangi_massiv[index].like=false
      dispatch({type : "add_watch", payload: item})
      setMovie(yangi_massiv )
    }
    function ChangeStatus(i){
      let yangi_massiv= [...movie]
      yangi_massiv[i].status=true
      setMovie(yangi_massiv)
    }
    function Addmovie_favorite(){

    }

  return (
    <div className='container my-5'>
         <div className="row">
            {
                (movie.length>0 && movie.map((item, index) =>{
                    return(
                       <div className="col-3 my-3 col-sm-6 col-md-3 col-xs-6">
                        <div className="card">
                            <Link to={`/cardlearn/${item.id}`}><img style={(!item.status) ? {filter: "blur(0px)"} : {filter: "blur(5px)"} } src={`${process.env.REACT_APP_IMG_URL + item.poster_path}`} alt="moviepopular" /></Link>
                            <h5 style={{width: '100%'}} className='text-truncate p-2 mt-4'>{item.title}</h5>
                            <p style={{width: '100%'}} className='text-truncate p-2 mt-4'>{t("sana")}{` ${item.release_date}`}</p>
                            <Link to={`/cardlearn/${item.id}`}><button className='btn btn-success lern'>{t("Learnmore")}</button></Link>
                            <div className='dot_list' onClick={()=> ChangeStatus(index)}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            {
                                (item.status) &&
                                <div className='watch_list'>
                                    <p onClick={()=>Addmovie_watch(item,index)}><BsFillBookmarkFill/> Watch list</p>
                                    <p onClick={()=>Addmovie_favorite(item)}><AiFillHeart/> Favorite list</p>
                                </div>
                            }
                        </div>
                       </div> 
                    )
                }
                ))
            }
         </div>
    </div>
  )
}
