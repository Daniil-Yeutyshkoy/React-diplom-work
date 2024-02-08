import { useDispatch, useSelector } from "react-redux";
import FilmCard from "../filmCard/filmCard"
import  styleMainContent  from "./mainContent.module.css";
import { featchFilmsCards } from "../../store/actions/fetchReducer";
import { useEffect } from "react";
import { InitialStateInt} from "../../interfases";

const MainContent =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{handleTenFilmsAdd()},[]);
    const films = useSelector((state:InitialStateInt)=>state.filmsCard);     

    const handleTenFilmsAdd =()=>{
        const result =10+1      
        dispatch(featchFilmsCards(result.toString()) as any)
    }
    
    return(
        <>
        <div className={styleMainContent.MainContentLayout}>
            {/* кинопоиск */}
            {films ? films.length && films.map((item)=><FilmCard 
            id={item.id}
            rating={item.rating.imdb} 
            poster={item.poster.url} 
            filmName={item.name} 
            year={item.year} 
            description={item.description} 
            genres={item.genres.map(item=>item.name +' ')}
            key={item.id}
            />):null}
        </div>
         <button onClick={()=>{handleTenFilmsAdd()}} className={styleMainContent.showMore}>Show more</button>
         </>
    )
}

export default MainContent