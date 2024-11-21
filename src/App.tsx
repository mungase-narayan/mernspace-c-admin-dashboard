import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routers from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={Routers} />
    </>
  );
}

export default App;
