import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Auteur from "./pages/Auteur";
import Univers from "./pages/Univers";
import Personnage from "./pages/Personnage";
import Histoire from "./pages/Histoire";
import AudioPlayer from "./components/AudioPlayer";

import Page404 from "./pages/Page404";
import { createContext } from "react";

export const GlobalContext = createContext();

function App() {
  return (
    <GlobalContext.Provider>
      <BrowserRouter>
      <AudioPlayer />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Auteur" element={<Auteur />}></Route>
          <Route path="/Univers" element={<Univers />}></Route>
          <Route path="/Personnage" element={<Personnage />}></Route>
          <Route path="/Histoire" element={<Histoire />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>

       
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App;