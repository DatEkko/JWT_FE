import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/header";
import axios from "./util/axiosCustomize";
import { useContext, useEffect } from "react";
import { AuthContext } from "./components/auth.context";
import { Spin } from "antd";

function App() {
  const { setAuth, appLoading, setAppLoading } = useContext(AuthContext);

  useEffect(() => {
    const getAccount = async () => {
      setAppLoading(true);
      let res = await axios.get('/v1/api/account');
      if (res) {
        setAuth({
          isAuthenticated: true,
          user: {
            email: res.email ?? "",
            name: res.name ?? "",
          }
        })
      }

      setTimeout(() => {
        setAppLoading(false)
      }, 1500);

    }

    getAccount();
  }, [])

  return (
    <div>
      {appLoading ?
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}>
          <Spin />
        </div>
        :
        <>
          <HeaderComponent />
          <Outlet />
        </>
      }

    </div>
  )
}

export default App
