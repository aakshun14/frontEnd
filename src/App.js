import { Routes, Route, BrowserRouter } from "react-router-dom";

import Form1 from "./pages/Form1";
import Form2 from "./pages/Form2";
import Nopage from "./pages/nopage";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { useEffect, useState } from "react";

import { auth } from "./firebase";
function App() {

  const [userName, setUserName] = useState('')

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName)
      } else setUserName('')
    })
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Form1" element={<Form1 name={userName}/>} />
          <Route path="/Form2" element={<Form2 name={userName}/>} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>

      {/* <HeaderAppBar />
      <InputField /> */}
    </>
  );
}

export default App;
