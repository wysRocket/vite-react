import { useContext } from "react";
import { divContext } from "./context/divContext";
import { withLayoutEffect } from "./HOC/withLayoutEffect";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const { divHeight, setDivHeight, targetRef, size } = useContext(divContext);

  return (
    <div className="App">
      <div
        className="App-header"
        ref={targetRef}
        style={{ height: divHeight + "px" }}
      >
        <img src={logo} className="App-logo" alt="logo" />

        <button type="button">
          live: {size.width}px / {size.height}px
        </button>

        <label>
          Adjustment
          <input
            className="dimension-input"
            type="number"
            value={divHeight}
            onChange={(e) => setDivHeight(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
};

export default withLayoutEffect(App);

let divHeight;
window.setDivHeight = (height) => (divHeight = height);
