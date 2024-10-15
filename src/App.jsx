import { BrowserRouter as Router } from "react-router-dom";
import LayoutApp from "./Components/LayoutApp";

const App = () => {
  return (
    <>
      <Router>
        <LayoutApp />
      </Router>
    </>
  );
};

export default App;
