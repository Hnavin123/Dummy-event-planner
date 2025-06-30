
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <h1> Happy Ending</h1> */}
      <AppRoutes />
      
    </BrowserRouter>
  );
}

export default App;
