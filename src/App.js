
import {useEffect, useState} from "react";
import List from "./components/List";


function App() {

    const [data,setData] = useState([])

    const getApi = async ()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const result = await res.json()
        setData(result)

    }

    useEffect(()=>{
        getApi()
    },[])

    return (
        <div className="App">

            <List obj={data}/>





        </div>
    );
}

export default App;