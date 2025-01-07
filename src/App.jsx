import Appname from "./component/Appname";
import Addtodo from "./component/Addtodo";
import Todoitems from "./component/Todoitems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage";
import { ToastContainer } from "react-toastify"; // Import ToastContainer for toast notifications
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS

function App() {
  const [todoitems, settodoitems] = useState([]);

  const handlenewitem = (itemname, itemdate) => {
    const newtodoitems = [...todoitems, { name: itemname, date: itemdate }];
    settodoitems(newtodoitems);
  };

  const handledeleteitem = (todoitemname) => {
    const newtodoitems = todoitems.filter((item) => item.name !== todoitemname);
    settodoitems(newtodoitems);
  };

  return (
    <center className="todo">
      <Appname />
      <Addtodo onnewitem={handlenewitem} />
      {todoitems.length === 0 && <WelcomeMessage />}
      <Todoitems todoitems={todoitems} ondeleteclick={handledeleteitem} />

      {/* ToastContainer to handle all toast notifications */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </center>
  );
}

export default App;
