import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/header";
import axios from "./util/axiosCustomize";
import { useEffect } from "react";


function App() {

  useEffect(() => {
    const fetchHello = async () => {
      const res = await axios.get(`/v1/api`);
      console.log("Res: ", res);
    }

    fetchHello();
  }, []);



  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  )
}

export default App
