import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isCharIncluded, setIsCharIncluded] = useState(false);
  const [isNumIncluded, setIsNumIncluded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
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
  }, [length, isNumIncluded, isCharIncluded]);

  useEffect(() => {
    setPassword(() => generatePassword());
    setIsCopied(false);
  }, [generatePassword]);

  function handleCopyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setIsCopied(true);
    passwordRef.current.select();
  }

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-gray-800">Password Generator</h1>
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          name="password"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
          className="border p-2 w-64 rounded-md focus:outline-none"
        />
        <button
          onClick={handleCopyToClipboard}
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ${isCopied ? "bg-green-500 hover:bg-green-600" : "px-6"}`}
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-2">
          <label htmlFor="length">Length: {length}</label>
          <input
            type="range"
            name="length"
            value={length}
            min="8"
            max="24"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="Numbers"
            checked={isNumIncluded}
            onChange={() => setIsNumIncluded(!isNumIncluded)}
          />
          <label htmlFor="Numbers">Numbers</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="Special Characters"
            checked={isCharIncluded}
            onChange={() => setIsCharIncluded(!isCharIncluded)}
          />
          <label htmlFor="Special Charactesr">Special Characters</label>
        </div>
      </div>
      <button
        onClick={() => {
          setPassword(generatePassword);
          setIsCopied(false);
        }}
        className="mt-4 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md text-white"
      >
        Generate
      </button>
    </div>
  );
}

export default App;
