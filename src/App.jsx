import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isCharIncluded, setIsCharIncluded] = useState(false);
  const [isNumIncluded, setIsNunIncluded] = useState(false);

  return <div className="text-xl">Password Generator</div>;
}

export default App;
