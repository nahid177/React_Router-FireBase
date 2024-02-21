import { Outlet } from "react-router-dom";
import Nav from "./Nav";



const Home = () => {
    return (
        <div  style={{position: "relative"}} >
            <div className=" absolute w-full h-screen bg-no-repeat bg-cover " style={{backgroundImage: "url('../public/Rectangle 1.png')", filter: "brightness(30%)", backgroundPosition: "center"}}>      
        </div>
        <Nav ></Nav>
        <Outlet></Outlet>
        </div>

  
    );
};

export default Home;
