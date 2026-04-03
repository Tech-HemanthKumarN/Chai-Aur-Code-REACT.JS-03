import React, { useState } from "react";

//It receives getColor from the parent. In the child's eyes, this is just a tool it was given to "talk" to the outside world.

export const Callback = ({ getColor }) => {
    
  //This state keeps track of what the user is typing inside the text box. This makes the input a Controlled Component.
  const [activeColor, setActiveColor] = useState("");

const handleChange = (e) => {
    const {value} = e.target; // What the user typed
    setActiveColor(value);    // Update the local text box
    getColor(value);          // TRIGGER: Send the value back to App.jsx
}

//When you type a single letter, handleChange runs.
// It updates the local input so you can see what you typed.
// Most Importantly: It calls getColor(value). This is like the child calling the parent on the phone and saying, "Hey, the user just typed 'Green'!"
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

//   The Step-by-Step Flow
// User Action: You type "Blue" into the <input> in Callback.jsx.

// Child Event: handleChange captures "Blue".

// The Lift: The child calls getColor("Blue").

// Parent Update: Inside App.jsx, the getColor function receives "Blue" and runs setUIColor("Blue").

// Re-render: React sees the state changed. It re-draws the page.

// Visual Change: The div in App.jsx now has background: "Blue".

};
