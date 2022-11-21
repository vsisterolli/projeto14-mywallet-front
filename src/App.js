import InitialScreen from "./pages/InitialScreen/InitialScreen";
import GlobalStyle from "./assets/styles/GlobalStyle";
import SignUp from "./pages/SignUp/SignUp";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext } from "react";
import Wallet from "./pages/Wallet/Wallet";
import AddPage from "./pages/AddPage/AddPage";

export const userContext = createContext(null)

function App() {

  const idState = React.useState(JSON.parse(localStorage.getItem("userData")));

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <userContext.Provider value={idState}>
        <Routes>
          <Route path="/" element={<InitialScreen/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/wallet" element={<Wallet/>}/>
          <Route path="/add/:type" element={<AddPage/>}/>
        </Routes>
      </userContext.Provider>
    </BrowserRouter>
  )
}

export default App;
