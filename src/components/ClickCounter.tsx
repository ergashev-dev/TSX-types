import { useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Click Counter
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Buttonni bosib hisoblagichni oshiring
        </p>

        <div className="text-5xl font-semibold text-gray-900 mb-6">
          {count}
        </div>

        <button
          onClick={handleClick}
          className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          +1
        </button>
      </div>
    </div>
  );
}