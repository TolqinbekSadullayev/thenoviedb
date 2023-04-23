import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardLearn from "./Components/CardLearn";
import Popular from "./Components/Popular";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./i18n";
import Qidir from "./Components/Qidir";
import Top_Rated from "./Components/Top_Rated";
import NowPlaying from "./Components/NowPlaying";
import Home from "./Components/Home/Home";
import Upcoming from "./Components/Upcoming";
import TvPopular from "./Components/TvPopular";
import AirToday from "./Components/AirToday";
import OnTv from "./Components/OnTv";
import TvRated from "./Components/TvRated";
import People from "./Components/People";
import People_learn from "./Components/People_learn";
import Footer from "./Components/Footer";
import Watchlist from "./Components/WatchList";
import Favorite from "./Components/Favorite";
import { Provider } from "react-redux";
import { store } from "./Components/Store/Srore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Footer/>}/>
            <Route path="cardlearn/:id" element={<CardLearn />} />
            <Route path="peoplelearn/:id" element={<People_learn/>}/>
            <Route path="qidir/:soz" element={<Qidir/>} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/toprated" element={<Top_Rated />} />
            <Route path="/nowplaying" element={<NowPlaying />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/tvpopular" element={<TvPopular />} />
            <Route path="/airtoday" element={<AirToday />} />
            <Route path="/ontv" element={<OnTv />} />
            <Route path="/tvrated" element={<TvRated />} />
            <Route path="/person" element={<People />} />
            <Route path="/watchlist" element={<Watchlist/>}/>
            <Route path="/favorite" element={<Favorite/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
