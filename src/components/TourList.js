import { React, useState } from "react";

const TourList = ({id, image, price, info, name}) =>{
    const [show, setShow] = useState(false)
    return(
        <article>
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
            <button>Not interested</button>
        </article>

    )
}

export default TourList