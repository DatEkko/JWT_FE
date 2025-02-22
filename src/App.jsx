import axios from "./util/axiosCustomize";
import { useEffect } from "react"

function App() {

  useEffect(() => {
    const fetchHello = async () => {
      const res = await axios.get(`/v1/api`);
      console.log("Res: ", res);
    }

    fetchHello();
  }, []);



  return (
    <>
      Helloooo
    </>
  )
}

export default App
