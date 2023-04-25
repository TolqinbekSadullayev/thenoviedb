import React , {useState} from 'react';
import { t } from "i18next";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import fimg from "../img/[removal.ai]_ebd3100f-2e92-42b6-9493-6da9511e5b4a.png"
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';


export default function Footer() {
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
    <div className='footerr'>
        <div className=''>
        <MDBFooter className='text-white text-center'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="3" md="12" className='mb-4 mb-md-0'>
          <Link to="/"><img style={{width: "150px"}} src={fimg} alt="footer logo" /></Link>
            <br />
          <button className='btn btn-primary'>{t("fuser")}</button>
          </MDBCol>

          <MDBCol lg="2" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>{t("footer1")}</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                {t("footer2")}
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                {t("footer3")}
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                {t("footer4")}
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                {t("footer5")}
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="2" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>{t("footer6")}</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                {t("footer7")}
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                {t("footer8")}
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                {t("footer9")}
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg="2" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>{t("footer10")}</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                {t("footer12")}
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                {t("footer13")}
                </a>
              </li>
              <li>
                <a href='https://t.me/tolqin_sadullayev/' className='text-white'>
                {t("footer14")}
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol lg="2" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>{t("footer16")}</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                {t("footer17")}
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                {t("footer18")}
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3 f2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://instagram.com/@tolqin_sadullayev'>
           To'lqinbek Sadullayev
        </a>
      </div>
    </MDBFooter>
        </div>
    </div>
  )
}


 