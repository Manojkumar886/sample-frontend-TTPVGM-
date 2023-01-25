import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Mainone } from "./HomePage";
import { TableForm } from "./TableCreation";

function App() {
  return (
    <>
    <BrowserRouter>
    <Mainone/>
    <Routes>
      <Route path="new" exact element={<TableForm/>}/>
      <Route path="create" exact element={<h2>Welcome to BrowserRouter Module</h2>} />
    </Routes>
    </BrowserRouter>

    
    </>
  );
}

export default App;
