import { useEffect,useState } from 'react';
import axios from 'axios'; 
import Form1  from './Form';



async function fetchData(country = "AFG") {
    const res = await  axios.get(`http://api.worldbank.org/v2/countries/${country}/indicators/NY.GDP.MKTP.KD.ZG/?format=json`)
    try {
       return res.data;
    } catch {
        console.log("it didn't work")
        return new Error;
    }
}

export default function ChartForBrazil() {
    const [chartData,setData] = useState([]);
    const [dropDownData,setDropDownData] = useState([]);

    useEffect(()=> {
        fetchData().then(res => {
            let object = res[1].slice(0,20);
            object.reverse();
            setData(object);
        })
        axios.get("http://api.worldbank.org/v2/country/?format=json")
        .then(res=> setDropDownData(res.data[1]))
        .catch(err=> console.error(err)); 
    },[])
    return (
        <div>
            <Form1 chartData = {chartData} setData = {setData} dropDownData = {dropDownData} fetchData = {fetchData}/>
        </div>
    )
}

