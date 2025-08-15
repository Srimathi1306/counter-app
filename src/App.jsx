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
    <div className="flex flex-col justify-center items-center gap-4 m-8 ">
      <div className="p-8 bg-blue-100 h-25 w-25 m-10 rounded-full flex flex-row justify-center items-center hover:scale-110 hover:bg-blue-200">
        <h1 className="font-bold text-4xl text-gray-800 transition-transform duration-200 ease-in-out transform hover:scale-110 hover:text-5xl">
          {" "}
          {count}
        </h1>
      </div>
      <div className=" border-2 border-gray-400 m-8 p-8">
        <div className="flex gap-4">
          <button
            onClick={increment}
            title="Increase"
            className=" rounded hover:border hover:border-blue-500 font-bold text-4xl w-16 h-16 bg-green-400 hover:bg-green-500 text-white  delay-300 rounded-full shadow-md transition"
          >
            +
          </button>
          <button
            onClick={decrement}
            title="decrease"
            className="rounded hover:border hover:border-blue-500 font-bold text-4xl w-16 h-16 bg-red-400 hover:bg-red-500 text-white delay-300 rounded-full shadow-md transition"
          >
            -
          </button>
        </div>
        <button
          onClick={() => setcount(0)}
          className=" m-4 rounded font-bold text-xl px-6 py-2 bg-gray-500 hover:bg-gray-400 text-white delay-200 shadow-md transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
