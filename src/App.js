import InitialScreen from "./pages/InitialScreen/InitialScreen";
import GlobalStyle from "./assets/styles/GlobalStyle";
import SignIn from "./pages/SignIn/SignIn";
import {BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<InitialScreen/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
