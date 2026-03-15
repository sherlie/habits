import { FC } from "react";
import NewHabitPage from "../pages/NewHabitPage";
import HomePage from "../pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "../entities/nav/Navbar";

const App: FC = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/addhabit" element={<NewHabitPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      <Navbar />
      </BrowserRouter>
    </>
  );
};

export default App;
