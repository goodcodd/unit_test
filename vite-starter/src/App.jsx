import "./App.css";
import React, {useState} from "react";


function App() {
    const [disabled, setDisabled] = React.useState(false);
    const [buttonColor, setButtonColor] = React.useState("medium-violet-red");
    const nextColor = buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
    const className = disabled ? "gray" : buttonColor;

  return (
    <div>
      <button className={buttonColor}
              onClick={() => setButtonColor(nextColor)}
      >
          Change to {nextColor}
      </button>
        <br/>
        <input
            type="checkbox"
            id="disable-button-checkbox"
            defaultChecked={false}
        />
        <label htmlFor="disable-button-checkbox">
            Disable button
        </label>
    </div>
  );
}

export default App;
