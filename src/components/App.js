import { React, useState, useEffect } from "react";
import  Loading  from "./loading.js";
import  Tour from "./Tour.js";
const url = 'https://course-api.com/react-tours-project'

const App = () =>{
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([])
    
    

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
           <Tour getTours={tours}/>
        </div>
    )
}

export default App