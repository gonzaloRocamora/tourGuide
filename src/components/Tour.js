import { React } from "react"
import TourList from "./TourList.js";
const Tour = ({getTours}) =>{
    //
    return(
        <div>
             <article>
            {getTours.map(items => {
                return <TourList key={items.id} {...items}></TourList>
            })}
             </article>
        </div>
    )
}
export default Tour