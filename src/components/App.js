import { React, useState, useEffect } from "react";
import  Loading  from "./loading.js";
import  Tour from "./Tour.js";
const url = 'https://course-api.com/react-tours-project'

const App = () =>{
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([])
    
    const removeTour = (id) =>{
        const hideTours = tours.filter(item => item.id  !== id);
        setTours(hideTours);
        console.log('test')
    }

    const getData = async() =>{
       setLoading(true);
    try {
        const fetchData = await fetch (url);
        const data = await fetchData.json();
        setLoading(false);
        setTours(data);
        
    
    } catch (error) {
        setLoading(false)
        console.log('error')
    }
    }

    useEffect(() => {
        getData();
    }, [])

    if(loading === true){
        return <main>
            <Loading />
        </main>
    }

    
    
    return(
        <div>
           <Tour getTours={tours} removeTour={removeTour}/>
        </div>
    )
}

export default App