import "./App.css";

function App() {
  return (
    <div className="min-w-screen min-h-screen bg-gray-300 font-semibold flex flex-col items-center p-2">
      <h1>PKMN FRONT</h1>
      <div className="flex flex-col items-center justify-center h-40 gap-4 mt-8">
        <input
          placeholder="user"
          className="w-50 border rounded border-gray-700 h-12 px-2"
          type="text"
        />
        <input
          placeholder="password"
          className="w-50 border rounded border-gray-700 h-12 px-2"
          type="text"
        />
        <button className="bg-gray-900 text-gray-300 rounded-lg px-4 py-2">
          enviar
        </button>
      </div>
    </div>
  );
}

export default App;
