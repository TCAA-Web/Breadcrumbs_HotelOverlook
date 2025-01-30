import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DestinationsPage } from "./pages/DestinationsPage";
import { FrontPage } from "./pages/FrontPage";
import { CountryPage } from "./pages/CountryPage";
import { CityPage } from "./pages/CityPage";
import { HotelPage } from "./pages/HotelPage";
import { RoomPage } from "./pages/RoomPage";
import { MainLayout } from "./layouts/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<FrontPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/destinations/:country" element={<CountryPage />} />
            <Route path="/destinations/:country/:city" element={<CityPage />} />
            <Route
              path="/destinations/:country/:city/:hotel"
              element={<HotelPage />}
            />
            <Route
              path="/destinations/:country/:city/:hotel/:room"
              element={<RoomPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
