import logo from './logo.svg';
import './App.css';
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import {Route, Routes} from "react-router";
import ChatRoom from "./components/ChatRoom";

function App() {
  return (
    <div className="App">
        <TopBar/>
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/chatroom" element={<ChatRoom/>}/>
     </Routes>
    </div>
  );
}

export default App;
