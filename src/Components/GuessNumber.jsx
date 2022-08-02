import { useState } from "react";

export const GuessNumber = () => {
  const [value, setValue] = useState("");
  const [ans, setAns] = useState("");
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setValue(() => e.target.value);
  };
  let number = 7;
  const check = (num) => {
    if (num === "") {
      setAns(() => "");
      setCount(() => count + 1);
      setValue(() => "");
    } else if (+num === number) {
      setAns(() => "You won.");
      setValue(() => "");
    } else if (+num > number) {
      setAns(() => "You guessed greater number than the answer");
      setCount(() => count + 1);
      setValue(() => "");
    } else {
      setAns(() => "You guessed smaller number than the answer");
      setCount(() => count + 1);
      setValue(() => "");
    }
  };

  return (
    <>
      <h1>Guess the number between 1 to 20</h1>
      <input
        type="number"
        placeholder="Enter number"
        value={value}
        onChange={handleChange}
      />
      <button onClick={() => check(value)}>Submit</button>
      {ans === "You won." ? (
        <div>
          <h2>
            {ans}
            👍
          </h2>
          <h2>Total number of attempts: {count}</h2>
        </div>
      ) : (
        <h2>{ans}</h2>
      )}
    </>
  );
};
