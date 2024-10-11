import { useState, useEffect } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isCharIncluded, setIsCharIncluded] = useState(false);
  const [isNumIncluded, setIsNumIncluded] = useState(false);

  useEffect(() => {
    setPassword(() => generatePassword());
  }, [length, isNumIncluded, isCharIncluded]);

  function generatePassword() {
    let pass = "";
    const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*";
    const numbers = "0123456789";

    let allowedString = alphabets;
    if (isCharIncluded) allowedString += specialChars;
    if (isNumIncluded) allowedString += numbers;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedString.length);
      pass += allowedString.charAt(randomIndex);
    }
    // console.log(pass);
    return pass;
  }

  return (
    <div className="text-xl">
      Password Generator
      <div>
        <input
          type="text"
          name="password"
          value={password}
          placeholder="Password"
          readOnly
        />
        <button>Copy</button>
      </div>
      <div>
        <input
          type="range"
          name="length"
          value={length}
          min="8"
          max="14"
          onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor="length">Length: {length}</label>
        <input
          type="checkbox"
          name="Numbers"
          checked={isNumIncluded}
          onChange={() => setIsNumIncluded(!isNumIncluded)}
        />
        <label htmlFor="Numbers">Numbers</label>
        <input
          type="checkbox"
          name="Special Characters"
          checked={isCharIncluded}
          onChange={() => setIsCharIncluded(!isCharIncluded)}
        />
        <label htmlFor="Special Charactesr">Special Characters</label>
      </div>
      <button onClick={() => setPassword(generatePassword)}>Generate</button>
    </div>
  );
}

export default App;
