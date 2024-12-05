import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import SocialPage from "./pages/SocialPage/SocialPage";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/social" element={<SocialPage />} />
    </Routes>
      {/* <MainPage /> */}
    </>
  );
}

export default App;
