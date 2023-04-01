import { useState } from "react";
import "./App.css";
import { AppContainer } from "./styles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppContainer>
      <h1>Animated Timeline</h1>
    </AppContainer>
  );
}

export default App;
