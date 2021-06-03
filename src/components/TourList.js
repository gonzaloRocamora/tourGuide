import { React, useState } from "react";
import Tour from "./Tour.js";
const TourList = ({id, image, price, info, name, removeTour}) =>{
    const [show, setShow] = useState(false)
    const [interested , setInterested] = useState(true)
    return(
        <article style={{visibility: interested? 'visible' : 'hidden'}}>
            <img src={image} alt=''></img>
            <footer>
                <div>
                    <h4>{name}</h4>
                    <h4>{price}</h4>
                    
                    </div>
                    <p>{show ? info : info.slice(0, 200) + '...'}
                    <button onClick={() => setShow(!show)}>{show ? 'show less' : 'read more'}</button>
                    </p>
                    
            </footer>
            <button onClick={() => {removeTour(id)}}>Not interested</button>
        </article>

    )
}

export default TourList