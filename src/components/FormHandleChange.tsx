import { useState } from "react";

export default function FormHandleChange() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Name:", form.name);
    console.log("Email:", form.email);
  }

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
      >
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Bitta handleChange
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Ma'lumotlaringizni kiriting
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ism
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ali"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-gray-500 transition"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ali@gmail.com"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-gray-500 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
}