import "./App.css";
import Add from "./pages/Add";
import Read from "./pages/read";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Read />} />{" "}
          <Route path="*" element={<Read />} />{" "}
          <Route path="/add" element={<Add />} />{" "}
          {/* <Route path="/update/" element={<Update />} />{" "} */}
        </Routes>{" "}
      </Router>{" "}
    </>
  );
}

export default App;
