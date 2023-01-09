import Basic3, { Basic1, Basic2 } from "./BasicComponents";
import { SamplebootstrapExample } from "./BootstrapSample";
import { Parameters } from "./ParameterizedComponents";
import { TableForm } from "./TableCreation";
import { FirstHook } from "./UseStateSample";
import { UseState2 } from "./useStateusingNumbers";


function App() {
  return (
    <>
    <UseState2/>
    <FirstHook/>
    {/* <Parameters where="./success.jpg" uyaram="200px" agalam="100px"/> */}
    {/* <SamplebootstrapExample /> */}
    {/* <TableForm/> */}
    {/* <Basic2/>
    <h1>Welcome to react js</h1>
    <Basic1/>
    <Basic3/> */}
    </>
  );
}

export default App;
