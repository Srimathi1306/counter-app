import { useState } from "react";
export default function App(props) {
  const [count, setcount] = useState(0);
  function increment() {
    setcount((pre) => pre + 1);
  }
  function decrement() {
    setcount((pre) => pre - 1);
  }
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="p-8 bg-blue-100 h-25 w-25 m-10 rounded-full flex flex-row justify-center items-center">
        <h1 className="font-bold text-3xl"> {count}</h1>
      </div>
      <button
        onClick={increment}
        className="font-bold text-4xl w-16 h-16 bg-green-400 hover:bg-green-300 text-white rounded-full shadow-md transition"
      >
        +
      </button>
      <button
        onClick={decrement}
        className="font-bold text-4xl w-16 h-16 bg-red-400 hover:bg-red-300 text-white rounded-full shadow-md transition"
      >
        -
      </button>
    </div>
  );
}
