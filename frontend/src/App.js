import { BrowserRouter, Routes, Route } from "react-router-dom"
import StrangerDanger from "./Components/StrangerDanger";
import Game1 from "./Components/Game1";
import Game2 from "./Components/Game2";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import AgePage from "./Components/AgePage";
import Legalmeasures from "./Components/Legalmeasures";
import TentoFourteenModulesPage from "./Components/TentoFourteenModulesPage";
import SixtoTenModulesPage from "./Components/SixtoTenModulesPage";
import Home from "./Components/Home";
import Rpage from "./Components/Rpage";
import TwotoSixModulesPage from "./Components/TwotoSixModulesPage";
import ParentsModule from "./Components/ParentsModule";
import SymptomsOfAbuse from "./Components/SymptomsOfAbuse";
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/feedback" element={<FeedbackPage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration/>} />
          <Route path="/profile" element={<AgePage />} />
          <Route path="/stranger" element={<StrangerDanger />} />
          <Route path="/rpage" element={<Rpage />} />
          <Route path="/game1" element={<Game1 />} />
          <Route path="/game2" element={<Game2 />} />
          <Route path="/legal" element={<Legalmeasures />} />
          <Route path="/module1" element={<TwotoSixModulesPage />} />
          <Route path="/module2" element={<SixtoTenModulesPage />} />
          <Route path="/module3" element={<TentoFourteenModulesPage />} />
          <Route path="/module4" element={<ParentsModule />} />
          <Route path="/symptoms" element={<SymptomsOfAbuse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
