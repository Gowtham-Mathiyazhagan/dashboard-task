import React, { useState } from "react";
import Content from "./Components/Content.jsx";
import AddResource from "./Components/AddResource.jsx";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout.jsx"; // Layout component is created for remove unnecessary repated component
import { ContextProvider } from "./Components/ContextProvider.jsx";
import ViweResource from "./Components/ViweResource.jsx";
import Jl from "./Components/Jl.jsx";
import Track from "./Components/Track.jsx";
import { FullReport } from "./Components/FullReport.jsx";

const App = () => {
  return (
    <ContextProvider>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Content />
              </Layout>
            }
          />
          <Route
            path="/addresource"
            element={
              <>
                <Layout>
                  <AddResource />
                </Layout>
              </>
            }
          />
          <Route
            path="/viewresource"
            element={
              <>
                <Layout>
                  <ViweResource/>
                </Layout>
              </>
            }
          />
          <Route
            path="/jl"
            element={
              <>
                <Layout>
                  <Jl/>
                </Layout>
              </>
            }
          />
          <Route
            path="/track"
            element={
              <Layout>
                <Track/>
              </Layout>
            }
          />
          <Route
            path="/fullreport"
            element={
              <Layout>
                <FullReport/>
              </Layout>
            }
          />
        </Routes>
      </main>
    </ContextProvider>
  );
};

export default App;
