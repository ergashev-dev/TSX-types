import { useState } from "react";

export default function LoginLogout() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  function handleClick() {
    setLoggedIn(!loggedIn);
  }

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Login / Logout
        </h1>

        <p className="text-gray-500 mb-6">
          {loggedIn ? "Login qilindi" : "Logout qilindi"}
        </p>

        <button
          onClick={handleClick}
          className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          {loggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}