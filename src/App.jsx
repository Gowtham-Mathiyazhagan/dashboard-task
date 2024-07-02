import React, { useState } from "react";
import Content from "./Components/Content.jsx";
import AddResource from "./Components/AddResource.jsx";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout.jsx"; // Layout component is created for remove unnecessary repated component
import { ContextProvider } from "./Components/ContextProvider.jsx";

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
        </Routes>
      </main>
    </ContextProvider>
  );
};

export default App;
