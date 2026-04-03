import React, { useState } from "react";

// Use a default export to match your App.jsx import if needed,
// or ensure App.jsx uses { Callback }
export const Callback = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);

    // FIX: Match the prop name exactly
    getColor(value);
  };

  return (
    <input
      type="text"
      id="input"
      className="w-full p-2 border-2 border-gray-300 rounded text-black bg-white outline-none focus:border-orange-700"
      placeholder="Type 'red' or '#00ff00'"
      onChange={handleChange}
      value={activeColor}
    />
  );
};
