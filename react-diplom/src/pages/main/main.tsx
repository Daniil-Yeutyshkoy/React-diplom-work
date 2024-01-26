import MainContent from "../../components/mainContent/mainContent";
import ActiveFilmCard from "../activeFilCard/activeFilmCard";
import Header from "../header/header"
import  MainStyle  from "./main.module.css";

const Main = ()=>{
    return(
        <>
        <div className={MainStyle.mainWrap}>
            <Header />
            <MainContent /> 
            {/* <ActiveFilmCard /> */}
        </div>
        </>

    )
}

export default Main