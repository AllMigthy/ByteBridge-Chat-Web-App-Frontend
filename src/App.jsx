import "./App.css";
import HomePage from "./pages/HomePage";
import {Route,Routes } from "react-router-dom";
import Chatpage from "./pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HomePage/>}  />
      <Route path="/chats" element={<Chatpage/>} />
      </Routes>
    </div>
  );
}

export default App;
