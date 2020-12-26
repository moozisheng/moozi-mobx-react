import React, {useState} from "react";
import UseLocalStore from "./pages/UseLocalStore";

export default function App(props) {
  const [countInit, setCountInit] = useState(-1);
  return (
    <div>
      <button onClick={() => setCountInit(countInit + 1)}>
        add countInit{countInit}
      </button>
      <UseLocalStore init={countInit} />
    </div>
  );
}
