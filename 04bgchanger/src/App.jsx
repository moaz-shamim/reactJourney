import { useState } from "react";

function App() {
  //
  const [color, setColor] = useState("olive");

  return (
    <>

      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
        >


        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam
        modi tempore corrupti itaque deleniti nesciunt laborum velit nulla, .iu
        r doloremque labore consectetur Loremm.

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

            <button

              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white "
              style={{ backgroundColor: "red" }}
            >
              Red

            </button>

            <button

              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white "
              style={{ backgroundColor: "blue" }}
            >
              blue

            </button>
            
            <button

              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white "
              style={{ backgroundColor: "green" }}
            >
              green

            </button>

            <button

              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white "
              style={{ backgroundColor: "yellow" }}
            >
              yellow

            </button>

            <button

              onClick={() => setColor("pink")}
              pink
              className="outline-none px-4 py-1 rounded-full text-white "
              style={{ backgroundColor: "pink" }}
            >
              pink

            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default App;
