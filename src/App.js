import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import Profile from "./Profile"
function App() {
  return (
    <Routes>
      <Route path="/" index element={"home route (/)"} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App
