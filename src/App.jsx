import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/header";
import axios from "./util/axiosCustomize";
import { useEffect } from "react";


function App() {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  )
}

export default App
