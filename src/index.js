import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./Component/Navbar/Navbar";
import "./css/style.css";
import FormCard from "./Component/Form/FormCard";
import { DataProvider } from "./Component/Utils/DataUseContext";
import { Container } from "./Component/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./Pages/About";
import { History } from "./Pages/History";
import { Home } from "./Pages/Home";
import {MoviePage} from "./Pages/MoviePage";
import { PageNotFound } from "./Pages/PageNotFound";

tailwind.config = {
  darkMode: "class",
  content: ["./src/**/*.js", "./public/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};

const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/about" element={<About />} />
            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
