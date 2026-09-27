export default function ButtonEvent() {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(e.currentTarget.textContent);
  }

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">
          Button Event
        </h1>

        <p className="text-sm text-gray-500 mb-5">
          Buttonlardan birini bosing.
        </p>

        <div className="flex gap-3">
          <button
            onClick={handleClick}
            className="flex-1 bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Birinchi
          </button>

          <button
            onClick={handleClick}
            className="flex-1 border border-gray-300 text-gray-900 py-3 rounded-xl hover:bg-gray-50 transition"
          >
            Ikkinchi
          </button>
        </div>
      </div>
    </div>
  );
}