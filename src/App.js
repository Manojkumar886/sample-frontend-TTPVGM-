import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Mainpage } from "./HomePage";
import { TableForm } from "./TableCreation";

function App() {
  return (
    <>
    <BrowserRouter>
    <Mainpage/>
    <Routes>
      <Route path="update" exact element={<TableForm/>}/>
      <Route path="create" exact element={<h2>Welcome to BrowserRouter Module</h2>} />
    </Routes>
    </BrowserRouter>

    
    </>
  );
}

export default App;
