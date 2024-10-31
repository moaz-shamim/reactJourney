import "./App.css";
import { userName1, userName2, userName3, userName4 } from "./data.js";
import Newcard from "./components/Newcard";

function App() {
  return (
    <>
    <div className="flex">
      <Newcard myObj={userName1} />
      <br />
      <Newcard myObj={userName2} />
      <br />
      <Newcard myObj={userName3} />
      <br />
      <Newcard myObj={userName4} />
    </div>
    </>
  );
}

export default App;
