import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/static/Navbar";
import Footer from "./components/static/Footer";
import ScrollToTop from "./components/static/ScrollToTop";
import Main from "./components/static/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import allRoutes from "./utils/routes";
import Redirect from "./components/static/Redirect";

function App() {
  return (
    <div>
      <Router>
        <div className="App flex flex-col">
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <ScrollToTop />
            <Navbar />
            <Routes>
              {allRoutes.map((route) => {
                return (
                  <Route
                    key={route.id}
                    exact
                    path={route.path}
                    element={route.element}
                  />
                );
              })}
              <Route exact path="*" element={<Redirect />} />
            </Routes>
            <Footer />
          </React.Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
