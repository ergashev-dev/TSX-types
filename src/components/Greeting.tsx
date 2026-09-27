import { useState } from "react";

export default function Greeting() {
  const [name, setName] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">
          Ism kiriting
        </h1>

        <p className="text-sm text-gray-500 mb-5">
          Ismingizni quyidagi maydonga yozing.
        </p>

        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Masalan: Ali"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-gray-500 transition"
        />

        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
          <p className="text-sm text-gray-500">Siz kiritdingiz:</p>

          <p className="mt-1 text-lg font-medium text-gray-900">
            {name || "Hali hech narsa kiritilmadi"}
          </p>
        </div>
      </div>
    </div>
  );
}