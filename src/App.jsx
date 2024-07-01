import React, { useState } from "react";
import Aside from "./Components/Aside";
import Navbar from "./Components/Navbar.jsx";
import Content from "./Components/Content.jsx";

const App = () => {
  const [active, setActive] = useState(false)
  return (
    <main onClick={()=>setActive(false)}>
      <Aside />
      <Navbar inputChanges={{active,setActive}}/>
      <Content/>
    </main>
  );
};

export default App;
