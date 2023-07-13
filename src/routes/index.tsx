import { Routes,Route } from "react-router-dom";
import { Ensure } from "../pages/Ensure";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Ensure/>}/>
    </Routes>
  );
}

export default RouteList;