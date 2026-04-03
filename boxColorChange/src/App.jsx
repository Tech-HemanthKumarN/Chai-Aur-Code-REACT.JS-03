import { useState } from "react";

import "./App.css";
import { Callback } from "./Callback/Callback.jsx";
function App() {

  // UIcolor: This is the "Source of Truth." Whatever string is stored here (e.g., "red", "blue", "#000") is what the box will display.
  // setUIColor: This is the only function allowed to change the color.

  const [UIcolor, setUIColor] = useState(""); // Initialize with empty string for color

  //This function is the "bridge." It waits to receive a value (color) and then gives it to setUIColor.
  //Crucial Step: We pass this function into the child component as a prop: <Callback getColor={getColor} />.
  const getColor = (color) => {
    setUIColor(color);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center gap-10 p-4">
      {/* Header - Fixed to top */}
      <h1 className="bg-orange-700 text-white p-3 rounded-lg shadow-md absolute top-10 text-center px-6">
        Enter Color Name to Change color in box
      </h1>

      {/* The Color Box */}
      <div
        className="rounded-xl shadow-2xl transition-all duration-500"
        style={{
          background: UIcolor || "white",
          height: "200px",
          width: "200px",
          border: "4px solid #333",
        }}
      ></div>

      {/* Input Container - Force visibility */}
      <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-inner border border-gray-300">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Type a color (e.g., Red, Blue, #000):
        </label>
        <Callback getColor={getColor} />
      </div>
    </div>
  );
}

export default App;
