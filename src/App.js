import Navbar from "./templates/Navbar";
import Textarea from "./templates/Textarea";
import React, { useState } from "react";
import About from "./templates/About";
// import React from "react";
// import ReactDOM from 'react-dom/client';
// import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(props) {
  const [mode, changeMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      changeMode("dark");
      document.body.style.backgroundColor = "#0b021a";
    } else {
      changeMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Navbar mode={mode} toggleMode={toggleMode} />,
  //     children: [
  //       {
  //         path: "Home",
  //         element: <Textarea mode={mode} toggleMode={toggleMode} />,
  //       },
  //       {
  //         path: "about",
  //         element: <About />,

  //       },

  //     ],
  //   },
  // ]);
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(<RouterProvider router={router} />);

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/>} />

          <Route
            path="/"
            element={<Textarea mode={mode} toggleMode={toggleMode} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
