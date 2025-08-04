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
    <div className="flex justify-center items-center gap-4">
      <div className="p-8 bg-blue-100 h-25 w-25 m-10 rounded-full flex justify-center items-center">
        <h1 className="font-bold text-3xl"> {count}</h1>
      </div>
      <button onClick={increment} className="font-bold text-4xl">
        +
      </button>
      <button onClick={decrement} className="font-bold text-4xl">
        -
      </button>
    </div>
  );
}
