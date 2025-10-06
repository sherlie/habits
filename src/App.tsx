import { FC, useState } from "react";
import NewHabit from "./NewHabit";
import { Page } from "./pages";
import HomePage from "./HomePage";
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
