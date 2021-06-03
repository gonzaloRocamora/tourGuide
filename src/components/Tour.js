import { React } from "react"
import TourList from "./TourList.js";

const Tour = ({getTours, removeTour}) =>{

    return(
        <div>
             <article>
            {getTours.map(items => {
                return <TourList key={items.id} {...items} removeTour={removeTour}></TourList>
            })}
             </article>
        </div>
    )
}
export default Tour