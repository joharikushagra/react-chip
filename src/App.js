import "./App.css";
import Input from "./components/Input";


function App() {
  return (
    <div className="w-full flex justify-center items-center h-48 ">
      <div className="rounded-md border-b-2 border-green-300 p-2 flex items-center flex-wrap w-1/2 max-w-2xl">
        <Input />
      </div>
    </div>
  );
}

export default App;
