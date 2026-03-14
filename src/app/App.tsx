import { FC } from "react";
import NewHabit from "../pages/NewHabit";
import HomePage from "../pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";

const App: FC = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/addhabit" element={<NewHabit />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
