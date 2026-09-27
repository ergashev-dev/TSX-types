import { useState } from "react";

export default function GreetingName() {
  const [ism, setIsm] = useState<string>("");
  const [salom, setSalom] = useState<string>("");

  function handleClick() {
    setSalom(`Salom, ${ism}!`);
  }

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Ismni kiriting
        </h1>

        <p className="text-sm text-gray-500 mb-5">
          Ismingizni yozing va salom berish tugmasini bosing.
        </p>

        <input
          type="text"
          value={ism}
          onChange={(e) => setIsm(e.target.value)}
          placeholder="Ismingiz..."
          className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-gray-500 transition"
        />

        <button
          onClick={handleClick}
          className="w-full mt-3 bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Salom berish
        </button>

        {salom && (
          <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="text-lg font-medium text-gray-900">{salom}</p>
          </div>
        )}
      </div>
    </div>
  );
}