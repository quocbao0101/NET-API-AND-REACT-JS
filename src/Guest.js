
import { Outlet } from "react-router-dom";
import Header from "./pages/Header/Header";


const Guest = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Guest;
