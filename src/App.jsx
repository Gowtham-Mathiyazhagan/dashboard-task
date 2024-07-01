import React, { useState } from "react";
import Aside from "./Components/Aside";
import Navbar from "./Components/Navbar.jsx";
import Content from "./Components/Content.jsx";
import AddResource from "./Components/AddResource.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [active, setActive] = useState(false);
  return (
    <main onClick={() => setActive(false)}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Aside />
              <Navbar inputChanges={{ active, setActive }} />
              <Content />
            </>
          }
        />
        <Route
          path="/addresource"
          element={
            <>
              <Aside />
              <Navbar inputChanges={{ active, setActive }} />
              <AddResource />
            </>
          }
        />
      </Routes>
    </main>
  );
};

export default App;
