import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img from "../img/6112a993c36d3fd993d1dd4d_themoviedb_logo-p-1600.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function NavScrollExample() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("Ru");

  const changeLanguage = (til) => {
    if (til === "Ru") {
      localStorage.setItem("language", "Ru")
      setLang("Ru");
    }
    if (til === "En") {
      localStorage.setItem("language", "En")
      setLang("En");
    }
    if (til === "Uz") {
      localStorage.setItem("language", "Uz")
      setLang("Uz");
    }
    i18n.changeLanguage(til);
  }
  document.addEventListener("keydown", function(event) {
    if(event.key === "Enter" && search != ''){
      Search()
    }
  })

  

const linkStyle = {
  textDecoration: "none",
  color: 'black'
};
  const [search, setSearch] = useState('');
 const navigate = useNavigate()
  function Search(){
    navigate(`/qidir/${search}`)
  }
  return (
    <Navbar className="barnav " expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link to="/" >
            <img src={img} width={150} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown
              title={<span className="titul">{t("N_film")}</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item id="drop">
                <Link to="/popular" style={linkStyle}>{t("N_popular")}</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to="/nowplaying"style={linkStyle}>{t("N_smotret")}</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to="/upcoming"style={linkStyle}>{t("N_ojidam")}</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Link to="/toprated"style={linkStyle}>{t("N_luchshe")}</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className="titul">{t("N_serial")}</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item >
                <Link to="/tvpopular"style={linkStyle}>{t("N_popular")}</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to="/tvpopular"style={linkStyle}>{t("N_bugun")}</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to="/ontv"style={linkStyle}>{t("N_televedinya")}</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to="/tvrated"style={linkStyle}>{t("N_luchshe")}</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className="titul">{t("N_lyudi")}</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item >
                <Link to="/person" style={linkStyle}>{t("N_popular_l")}</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className="titul">{t("N_yesh")}</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item >
                <Link to={"/watchlist"} style={linkStyle}>{t("N_obsujdeniya")}</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to={"/favorite"} style={linkStyle}>{t("N_doska")}</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                {t("N_podderjka")}
              </NavDropdown.Item>
              <NavDropdown.Item >API</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <div className="col-md-4 col-sm-1 ">
          <button
            className="btn btn-success mx-3"
            onClick={() => changeLanguage("En")}
          >
            <i class="fa fa-language" aria-hidden="true"></i> En
          </button>
          <button
            className="btn btn-danger mx-3"
            onClick={() => changeLanguage("Ru")}
          >
            <i class="fa fa-language" aria-hidden="true"></i> Ru
          </button>
          <button
            className="btn btn-primary mx-3"
            onClick={() => changeLanguage("Uz")}
          >
            <i class="fa fa-language" aria-hidden="true"></i> Uz
          </button>
        </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder={t("N_search")}
              className="me-2"
              aria-label={t("N_search")}
              onInput={(val)=> setSearch(val.target.value)}
            />
            <Button variant="outline-success" onClick={Search}>{t("N_search")}</Button>
          </Form>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
