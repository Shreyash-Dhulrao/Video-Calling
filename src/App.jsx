import { Routes , Route } from "react-router-dom"
import Homepage from "./Pages/Home"
import Call from "./Pages/Call"

function App() {

  return (
    <>
     <Routes >
        <Route path="/" element={<Homepage />} />
        <Route path="/room/:id" element={<Call />} />
     </Routes>
    </>
  )
}

export default App
