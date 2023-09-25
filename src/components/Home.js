import { Outlet } from "react-router-dom";
import Cards from "../cards/Cards";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Cards />
      <Outlet/>
    </>
  );
}

export default Home;
